import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { FC } from 'react'

export const ProgressSkeletonUI: FC = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 9999,
				pointerEvents: 'all',
			}}
		>
			<CircularProgress size={60} />
		</Box>
	)
}
