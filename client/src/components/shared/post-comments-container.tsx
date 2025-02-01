import { Comments } from '@/redux/profile/types'
import Box from '@mui/material/Box'
import { FC } from 'react'
import { CommentsBlock } from './comments-block'

export interface Props {
	comments?: Comments[]
}

export const PostCommentsContainer: FC<Props> = ({ comments }) => {
	return (
		<Box sx={{ py: 2 }}>
			<Box>
				{comments?.map(comment => (
					<CommentsBlock key={comment.id} {...comment} />
				))}
			</Box>
		</Box>
	)
}
