'use client'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Heart } from 'lucide-react'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

export interface Props {
	likes: number
	like: boolean
	id: number
}

export const PostLikesBlock: FC<Props> = ({ likes, like, id }) => {
	const postActions = new PostActions()

	const [likesData, setLikesData] = useState<number>(likes)
	const [clickLike, setClickLike] = useState<boolean>(like)

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

	return (
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
					<Heart color='#bdbdbd' size={22} />
				)}
			</Button>
			<Typography
				sx={[
					theme => ({
						fontSize: '14px',
						fontWeight: 600,
						ml: -1.5,
						color: '#595959',
					}),
					theme =>
						theme.applyStyles('dark', {
							color: '#dfdfdf',
						}),
				]}
			>
				{likesData ? likesData : likes} Likes
			</Typography>
		</Box>
	)
}
