'use client'

import Box from '@mui/material/Box'
import { FC } from 'react'
import { TComments } from '../../../@types/post'
import { PostCommentsBlock } from './post-comments-block'
import { PostLikesBlock } from './post-likes-block'

export interface Props {
	id: number
	likes: number
	like: boolean
	comments?: TComments[]
	setOpenComments: (value: boolean) => void
	openComments: boolean
}

export const PostLikesAndCommentsBlock: FC<Props> = ({
	id,
	likes,
	like,
	comments,
	setOpenComments,
	openComments,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '3rem',
			}}
		>
			<PostLikesBlock id={id} likes={likes} like={like} />
			<PostCommentsBlock
				setOpenComments={setOpenComments}
				openComments={openComments}
				comments={comments ? comments : []}
			/>
		</Box>
	)
}
