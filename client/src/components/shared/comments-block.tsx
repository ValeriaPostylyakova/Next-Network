'use client'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { unwrapResult } from '@reduxjs/toolkit'
import { Heart, Trash } from 'lucide-react'
import Link from 'next/link'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { AvatarUI, FlexContainer } from '../ui'

export interface Props {
	id: number
	username: string
	userId: number
	userImgUrl?: string
	text: string
	date: string
}

const postActions = new PostActions()

export const CommentsBlock: FC<Props> = ({
	id,
	username,
	userId,
	text,
	userImgUrl,
	date,
}) => {
	const [commentDisabledId, setCommentDisabledId] = useState<number | null>(
		null
	)
	const [clickLike, setClickLike] = useState<boolean>(false)
	const dispatch: AppDispatch = useDispatch()

	const deleteComment = async () => {
		try {
			const resultAction = await dispatch(postActions.deleteComment(id))
			unwrapResult(resultAction)
			setCommentDisabledId(id)
		} catch (e) {
			console.error(e)
			toast.error('Ошибка при удалении комментария')
		}
	}

	return (
		<>
			<Box
				style={{
					width: '98%',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					background: 'background.default',
					cursor: 'pointer',
					padding: '10px 0',
					opacity: commentDisabledId === id ? 0.5 : 1,
					pointerEvents: commentDisabledId === id ? 'none' : 'auto',
				}}
			>
				<Link
					href={`/user/${userId}`}
					style={{
						display: 'flex',
						gap: '1rem',
						alignItems: 'center',
					}}
				>
					<AvatarUI width={55} imageUrl={userImgUrl} />

					<Box
						sx={{
							display: 'flex',
							alignItems: 'start',
							height: '100%',
							flexDirection: 'column',
							gap: ' 0.2rem',
						}}
					>
						<Typography sx={{ fontSize: `16px`, fontWeight: 600 }}>
							{username}
						</Typography>

						<Typography
							sx={[
								theme => ({
									fontSize: `14px`,
									fontWeight: 500,
									color: '#555555',
									mb: 1,
								}),
								theme =>
									theme.applyStyles('dark', {
										color: '#b5b5b5',
									}),
							]}
						>
							{text}
						</Typography>
						<Typography
							sx={{
								fontSize: '12px',
							}}
						>
							{date}
						</Typography>
					</Box>
				</Link>
				<FlexContainer>
					<button onClick={() => setClickLike(!clickLike)}>
						{clickLike ? (
							<Heart color='#ff3030' size={22} />
						) : (
							<Heart color='#a3a3a3' size={22} />
						)}
					</button>
					<button onClick={deleteComment}>
						<Trash size={22} color='#a3a3a3' />
					</button>
				</FlexContainer>
			</Box>
			<Divider />
		</>
	)
}
