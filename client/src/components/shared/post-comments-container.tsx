import Box from '@mui/material/Box'
import { FC } from 'react'
import { TComments } from '../../../@types/post'
import { CommentsBlock } from './comments-block'

export interface Props {
	comments?: TComments[]
}

export const PostCommentsContainer: FC<Props> = ({ comments }) => {
	return (
		<Box sx={{ px: 2 }}>
			<Box>
				{comments?.map(comment => (
					<CommentsBlock key={comment.id} {...comment} />
				))}
			</Box>
		</Box>
	)
}
