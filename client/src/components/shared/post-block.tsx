'use client'
import { FC, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Comments } from '../../../@types/post'
import { MainBlock } from '../ui'
import { EmojiBlock } from './emoji-block'
import { PostBlockContent } from './post-block-content'
import { PostBlockFooter } from './post-block-footer'
import { PostBlockHeader } from './post-block-header'
import { PostCommentsContainer } from './post-comments-container'
import { PostWriteCommentsBlock } from './post-write-comments-block'

export interface Props {
	id: number
	text?: string
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	userId: number
	likes: number
	like: boolean
	comments: Comments[]
	date: string
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
	date,
	visibleMenu,
	userId,
}) => {
	const [openComments, setOpenComments] = useState<boolean>(false)
	const [showEmoji, setShowEmoji] = useState<boolean>(false)
	const [valueInput, setValueInput] = useState<string>('')
	const menuRef = useRef<boolean>(visibleMenu)

	const dispatch: AppDispatch = useDispatch()
	const postActions = new PostActions()

	const handleInputComment = async (e: KeyboardEvent) => {
		if (e.code === 'Enter' || e.type === 'click') {
			await dispatch(
				postActions.createComment({ postId: id, text: valueInput })
			)
			setValueInput('')
		}
	}

	const deletePost = async () => {
		try {
			const resultAction = await dispatch(postActions.deletePost(id))
			unwrapResult(resultAction)
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
						userId={userId}
						userImageUrl={userImageUrl}
						deletePost={deletePost}
					/>
					<Divider />
					<PostBlockContent text={text} postImageUrl={postImageUrl} />
					<PostBlockFooter
						id={id}
						comments={comments}
						openComments={openComments}
						date={date}
						like={like}
						likes={likes}
						setOpenComments={setOpenComments}
					/>
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
				<EmojiBlock setValue={setValueInput} bottom={'21%'} right={0} />
			)}
		</Box>
	)
}
