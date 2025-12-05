import { Skeleton } from '@mui/material'
import { FC } from 'react'

export interface Props {
	height: string
	mb?: number
}

export const ChatHeaderSkeletonUI: FC<Props> = ({ height, mb }) => {
	return (
		<Skeleton
			variant='rounded'
			height={height}
			sx={{
				mb: mb,
				height: height,
				width: 'calc(100%-660px)',
			}}
		/>
	)
}
