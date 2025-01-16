'use client'

import Drawer from '@mui/material/Drawer'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
}

export const DrawerUI: FC<Props> = ({ children }) => {
	return (
		<Drawer
			sx={[
				theme => ({
					width: 300,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: 300,
						boxSizing: 'border-box',
						color: '#fff',
					},
				}),
				theme =>
					theme.applyStyles('light', {
						'& .MuiDrawer-paper': {
							backgroundColor: theme.palette.primary.light,
						},
					}),
			]}
			variant='permanent'
			anchor='left'
		>
			{children}
		</Drawer>
	)
}
