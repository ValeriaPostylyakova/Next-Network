import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	imageName: string
	text: string
}

export const BlockEmpty: FC<Props> = ({ imageName, text }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '80vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1.5rem',
					textAlign: 'center',
				}}
			>
				<img width={300} src={`/images/${imageName}`} alt='post-empty' />
				<Typography fontWeight={600} variant='h5'>
					{text}
				</Typography>
			</Box>
		</Box>
	)
}
