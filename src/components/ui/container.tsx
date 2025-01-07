import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	width?: string
}

export const ContainerUI: FC<Props> = ({ children, width }) => {
	return (
		<Box
			sx={{
				width: width || '80%',
				m: '0 auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			{children}
		</Box>
	)
}
