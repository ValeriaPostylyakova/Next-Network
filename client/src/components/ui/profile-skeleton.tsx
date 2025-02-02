import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { FC } from 'react'
export const ProfileSkeleton: FC = () => {
	return (
		<Box
			sx={{
				width: '100vh',
				display: 'flex',
				alignItems: 'center',
				gap: '1rem',
			}}
		>
			<Skeleton animation='wave' variant='circular' width={80} height={80} />
			<Box>
				<Skeleton
					animation='wave'
					variant='rounded'
					height={25}
					width={500}
					sx={{ mb: 1 }}
				/>
				<Skeleton animation='wave' variant='rounded' height={21} width={400} />
			</Box>
		</Box>
	)
}
