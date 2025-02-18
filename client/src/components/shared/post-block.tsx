'use client'
import { FC, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { Comments } from '../../../@types/post'
import { MainBlock } from '../ui'
import { EmojiBlock } from './emoji-block'
import { PostBlockContent } from './post-block-content'
import { PostBlockHeader } from './post-block-header'
import { PostCommentsBlock } from './post-comments-block'
import { PostCommentsContainer } from './post-comments-container'
import { PostLikesBlock } from './post-likes-block'
import { PostWriteCommentsBlock } from './post-write-comments-block'

export interface Props {
	id: number
	text?: string
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	likes: number
	like: boolean
	comments?: Comments[]
	visibleMenu: boolean
}

export const PostBlock: FC<Props> = ({
	id,
	text,
	postImageUrl,
	fullname,
	likes,
	like,
	comments,
	jobTitle,
	userImageUrl,
	visibleMenu,
}) => {
	const [openComments, setOpenComments] = useState<boolean>(false)
	const [showEmoji, setShowEmoji] = useState<boolean>(false)
	const [valueInput, setValueInput] = useState<string>('')
	const menuRef = useRef<boolean>(visibleMenu)

	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.profile)
	const postActions = new PostActions()

	const handleInputComment = (e: KeyboardEvent) => {
		const userObj = {
			id: id,
			username: profile.firstname + ' ' + profile.lastname,
			userImgUrl: profile.imageUrl,
			text: valueInput,
		}

		if (e.code === 'Enter' || e.type === 'click') {
			dispatch(postActions.createComment(userObj))
			setValueInput('')
		}
	}

	const deletePost = async () => {
		try {
			dispatch(postActions.deletePost(id))
			toast.success('Пост успешно удалён')
		} catch (e) {
			console.error(e)
			toast.error('Ошибка при удалении поста')
		}
	}

	return (
		<Box position='relative' sx={{ flexGrow: 0, maxWidth: '90vw' }}>
			<MainBlock>
				<Box
					sx={{
						maxWidth: '98%',
						m: '0 auto',
						py: 2,
						wordWrap: 'break-word',
					}}
				>
					<PostBlockHeader
						visibleMenu={menuRef}
						fullname={fullname}
						jobTitle={jobTitle}
						userImageUrl={userImageUrl}
						deletePost={deletePost}
					/>
					<Divider />
					<PostBlockContent text={text} postImageUrl={postImageUrl} />
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '3rem',
							ml: -2,
							mb: 2,
						}}
					>
						<PostLikesBlock id={id} likes={likes} like={like} />
						<PostCommentsBlock
							setOpenComments={setOpenComments}
							openComments={openComments}
							comments={comments ? comments : []}
						/>
					</Box>
					<Divider />
					<PostCommentsContainer
						comments={openComments ? comments : comments?.slice(0, 1)}
					/>
					<PostWriteCommentsBlock
						value={valueInput}
						setValue={setValueInput}
						handleInputComment={handleInputComment}
						showEmoji={showEmoji}
						setShowEmoji={setShowEmoji}
					/>
				</Box>
			</MainBlock>
			{showEmoji && (
				<EmojiBlock setValue={setValueInput} top='100%' right={0} />
			)}
		</Box>
	)
}
