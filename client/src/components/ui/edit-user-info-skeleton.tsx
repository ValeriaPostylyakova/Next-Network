import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const EditUserInfoSkeleton: FC<Props> = () => {
	return (
		<Box
			sx={{
				pt: 6,
			}}
		>
			<Skeleton
				variant='rounded'
				sx={{
					mb: 4,
				}}
				width={'80%'}
				height={25}
			/>
			<Skeleton variant='rounded' width={'80%'} height={25} />
		</Box>
	)
}
