import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { FC } from 'react'

export const PostSkeleton: FC = () => {
	return (
		<Box sx={{ mt: 5 }}>
			<Skeleton
				variant='rounded'
				height={80}
				sx={{ mb: 0.3, borderRadius: 2 }}
			/>
			<Skeleton variant='rounded' height={400} sx={{ borderRadius: 2 }} />
		</Box>
	)
}
