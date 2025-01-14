'use client'

import Box from '@mui/material/Box'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	mt: number
}

export const MainWrapper: FC<Props> = ({ children, mt }) => {
	return (
		<Box
			component='main'
			sx={[
				theme => ({
					mt: `${mt}px`,
					minHeight: '100vh',
					width: '100%',
					position: 'relative',
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
