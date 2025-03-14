import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { PostCommentsBlock, PostLikesBlock } from '.'
import { TComments } from '../../../@types/post'

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
