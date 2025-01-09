import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const StoryBlock: FC<Props> = () => {
	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Button
				sx={{
					borderRadius: '100%',
					p: 0.25,
					width: '80px',
					height: '80px',
					border: '2px solid #eee',
					backgroundImage:
						'url(https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					mb: 1,
				}}
			/>
			<Typography sx={{ fontSize: '13px', color: '#7e7e7e' }}>
				X_AE_A-13
			</Typography>
		</Box>
	)
}
