import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { FC } from 'react'

export interface Props {
	width: number
	heightLineTop: number
	widthLineTop: number
	heightLineBottom: number
	widthLineBottom: number
	widthContainer: string
}

export const ProfileSkeleton: FC<Props> = ({
	width,
	heightLineTop,
	widthLineTop,
	heightLineBottom,
	widthLineBottom,
	widthContainer,
}) => {
	return (
		<Box
			sx={{
				width: widthContainer,
				display: 'flex',
				alignItems: 'center',
				gap: '1rem',
			}}
		>
			<Skeleton
				animation='wave'
				variant='circular'
				width={width}
				height={width}
			/>
			<Box>
				<Skeleton
					animation='wave'
					variant='rounded'
					height={heightLineTop}
					width={widthLineTop}
					sx={{ mb: 1 }}
				/>
				<Skeleton
					animation='wave'
					variant='rounded'
					height={heightLineBottom}
					width={widthLineBottom}
				/>
			</Box>
		</Box>
	)
}
