'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Comments } from '../../../@types/post'
import { MainBlock } from '../ui'
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
}) => {
	const dispatch: AppDispatch = useDispatch()
	const [openComments, setOpenComments] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')

	const profileInfo = useSelector(
		(state: RootState) => state.profile.profileInfo
	)
	const postActions = new PostActions()

	const handleWhiteComment = (e: KeyboardEvent) => {
		if (e.code === 'Enter' && profileInfo) {
			dispatch(
				postActions.createComment({
					id: id,
					username: profileInfo.firstname + ' ' + profileInfo.lastname,
					userImgUrl: profileInfo.imageUrl,
					text: value,
				})
			)
			setValue('')
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

	const handleClickComment = () => {
		if (profileInfo) {
			dispatch(
				postActions.createComment({
					id: id,
					username: profileInfo.firstname + ' ' + profileInfo.lastname,
					userImgUrl: profileInfo.imageUrl,
					text: value,
				})
			)
			setValue('')
		}
	}

	return (
		<MainBlock>
			<PostBlockHeader
				fullname={fullname}
				jobTitle={jobTitle}
				userImageUrl={userImageUrl}
				deletePost={deletePost}
			/>
			<Divider />
			<Box>
				<Typography sx={{ fontSize: '16px', pt: 2, mb: 2 }}>{text}</Typography>
				{postImageUrl && (
					<img
						src={postImageUrl}
						style={{
							width: '100%',
							height: '450px',
							borderRadius: '7px',
							marginBottom: 2,
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				)}
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
						comments={comments}
					/>
				</Box>
				<Divider />
				<PostCommentsContainer
					comments={openComments ? comments : comments?.slice(0, 1)}
				/>
				<PostWriteCommentsBlock
					value={value}
					setValue={setValue}
					handleWhiteComment={handleWhiteComment}
					handleClickComment={handleClickComment}
				/>
			</Box>
		</MainBlock>
	)
}
