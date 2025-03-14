'use client'

import Box from '@mui/material/Box'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	mt: number
	pt?: number
}

export const MainWrapper: FC<Props> = ({ children, mt, pt }) => {
	return (
		<Box
			sx={[
				theme => ({
					mt: `${mt}px`,
					pt: `${pt}rem`,
					minHeight: '100vh',
					width: 'calc(100% - 660px)',
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
