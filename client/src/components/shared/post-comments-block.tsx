import { Comments } from '@/redux/profile/types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MessageSquareText } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	comments?: Comments[]
}

export const PostCommentsBlock: FC<Props> = ({ comments }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '1.3rem',
				cursor: 'pointer',
			}}
		>
			<MessageSquareText color='#d3d3d3' size={22} />
			<Typography sx={{ fontSize: '14px', fontWeight: 600, ml: -1.5 }}>
				{comments?.length} Comments
			</Typography>
		</Box>
	)
}
