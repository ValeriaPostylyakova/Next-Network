'use client'

import { PostActions } from '@/redux/post/async-action'
import { LikesData } from '@/redux/post/types'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { unwrapResult } from '@reduxjs/toolkit'
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
		try {
			const actions =
				likesData % 2 === 0 ? postActions.addLikes : postActions.removeLikes

			const data = await dispath(actions(String(id)))
			const res = unwrapResult(data) as LikesData
			setLikesData(res.likes)
			setClickLike(res.like)
		} catch (e) {
			console.error(e)
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
