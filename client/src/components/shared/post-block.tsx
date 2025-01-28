'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import { Heart, MessageSquareText, SendHorizontal, Smile } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonUI, FlexContainer, MainBlock } from '../ui'
import { PostBlockHeader } from './post-block-header'

export interface Props {
	id: number
	text?: string
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	likes: number
	like: boolean
	comments?: string[]
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
	const [likesData, setLikesData] = useState<number>(likes)
	const [clickLike, setClickLike] = useState<boolean>(like)
	const router = useRouter()
	const postActions = new PostActions()
	const dispath = useDispatch<AppDispatch>()

	const onClickLike = async () => {
		if (likesData % 2 === 0) {
			const data = await dispath(postActions.addLikes(String(id)))
			setLikesData(data.payload.likes)
			setClickLike(data.payload.like)
		} else {
			const data = await dispath(postActions.removeLikes(String(id)))
			setLikesData(data.payload.likes)
			setClickLike(data.payload.like)
		}
	}

	const onClickComments = () => {
		router.push(`/post/${id}`)
	}

	return (
		<MainBlock>
			<PostBlockHeader
				fullname={fullname}
				jobTitle={jobTitle}
				userImageUrl={userImageUrl}
			/>
			<Divider />
			<Box>
				<Typography sx={{ fontSize: '16px', pt: 2, mb: 2 }}>{text}</Typography>
				{postImageUrl && (
					<Box
						sx={{
							width: '100%',
							height: '450px',
							borderRadius: 4,
							mb: 2,
							backgroundImage: `url(${postImageUrl})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
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
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Button onClick={onClickLike}>
							{clickLike ? (
								<Heart color='#b63939' size={22} />
							) : (
								<Heart color='#d3d3d3' size={22} />
							)}
						</Button>
						<Typography sx={{ fontSize: '14px', fontWeight: 600, ml: -1.5 }}>
							{likesData ? likesData : likes} Likes
						</Typography>
					</Box>

					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '1.3rem',
							cursor: 'pointer',
						}}
						onClick={onClickComments}
					>
						<MessageSquareText color='#d3d3d3' size={22} />
						<Typography sx={{ fontSize: '14px', fontWeight: 600, ml: -1.5 }}>
							{comments?.length} Comments
						</Typography>
					</div>
				</Box>
				<Divider />
				<FlexContainer content='space-between' pt={2.5}>
					<FlexContainer>
						<Box
							sx={{
								borderRadius: '100%',
								p: 0.25,
								width: '45px',
								height: '45px',
								backgroundImage: 'url(/user-profile.svg)',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								mb: 1,
							}}
						/>
						<TextField
							size='small'
							sx={{
								width: '400px',
								outline: 'none',
								'.MuiOutlinedInput-root': {
									borderRadius: 5,
								},
							}}
							placeholder='Write your comment..'
						/>
					</FlexContainer>
					<FlexContainer>
						<ButtonUI variant='outlined'>
							<Smile />
						</ButtonUI>
						<ButtonUI variant='outlined'>
							<SendHorizontal />
						</ButtonUI>
					</FlexContainer>
				</FlexContainer>
			</Box>
		</MainBlock>
	)
}
function setPostLikes(id: number) {
	throw new Error('Function not implemented.')
}
