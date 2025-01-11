'use client'

import Box from '@mui/material/Box'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
}

export const MainBlock: FC<Props> = ({ children }) => {
	return (
		<Box
			sx={[
				theme => ({
					p: 2,
					boxShadow: '0px 5px 10px 0px rgba(34, 60, 80, 0.2)',
					borderRadius: 4,
					backgroundColor: 'background.default',
					mb: 6,
				}),
				theme =>
					theme.applyStyles('dark', {
						border: '1px solid #303030',
					}),
			]}
		>
			{children}
		</Box>
	)
}
