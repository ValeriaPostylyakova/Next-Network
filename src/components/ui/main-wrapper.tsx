'use client'

import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
}

export const MainWrapper: FC<Props> = ({ children }) => {
	return (
		<Box
			component='main'
			sx={[
				theme => ({
					mt: '65px',
					minHeight: '100vh',
					width: '100%',
				}),
				theme =>
					theme.applyStyles('dark', {
						backgroundColor: '#080808',
					}),
				theme =>
					theme.applyStyles('light', {
						backgroundColor: '#f9f9f9',
					}),
			]}
		>
			{children}
		</Box>
	)
}
