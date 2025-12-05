import { Skeleton } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'
import { FlexContainer } from './flex-container'

export interface Props {
	className?: string
}

export const EditUserSkeleton: FC<Props> = () => {
	return (
		<FlexContainer>
			<Skeleton variant='circular' width={110} height={110} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
				}}
			>
				<Skeleton variant='rounded' width={300} height={20} />
				<Skeleton
					variant='rounded'
					width={270}
					height={20}
					sx={{
						mb: 1.3,
					}}
				/>
				<Skeleton variant='rounded' width={200} height={20} />
			</Box>
		</FlexContainer>
	)
}
