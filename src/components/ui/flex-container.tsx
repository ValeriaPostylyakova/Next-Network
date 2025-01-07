import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
}

export const FlexContainer: FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '1rem',
			}}
		>
			{children}
		</Box>
	)
}
