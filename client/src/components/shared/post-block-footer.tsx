import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { TComments } from '../../../@types/post'
import { PostLikesAndCommentsBlock } from './post-likes-and-comments-block'

export interface Props {
	id: number
	likes: number
	like: boolean
	comments?: TComments[]
	setOpenComments: (value: boolean) => void
	openComments: boolean
	date: string
}

export const PostBlockFooter: FC<Props> = ({
	id,
	likes,
	like,
	comments,
	setOpenComments,
	openComments,
	date,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				ml: -2,
				mb: 2,
			}}
		>
			<PostLikesAndCommentsBlock
				id={id}
				like={like}
				likes={likes}
				openComments={openComments}
				setOpenComments={setOpenComments}
				comments={comments}
			/>
			<Typography
				sx={[
					theme => ({
						fontSize: '14px',
						fontWeight: 600,
						mr: 1,
						color: '#595959',
					}),
					theme =>
						theme.applyStyles('dark', {
							color: '#dfdfdf',
						}),
				]}
			>
				{date}
			</Typography>
		</Box>
	)
}
