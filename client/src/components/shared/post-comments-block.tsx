import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MessageSquareText } from 'lucide-react'
import { FC } from 'react'
import { TComments } from '../../../@types/post'

export interface Props {
	comments?: TComments[]
	setOpenComments: (value: boolean) => void
	openComments: boolean
}

export const PostCommentsBlock: FC<Props> = ({
	comments,
	setOpenComments,
	openComments,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '1.3rem',
				cursor: 'pointer',
			}}
			onClick={() => setOpenComments(!openComments)}
		>
			<MessageSquareText color='#bdbdbd' size={22} />
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
				{comments?.length} Comments
			</Typography>
		</Box>
	)
}
