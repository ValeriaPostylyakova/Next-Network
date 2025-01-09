import { Drawer, List, Toolbar } from '@mui/material/'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const SidebarRight: FC<Props> = () => {
	const drawerWidth = 360
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant='permanent'
			anchor='right'
		>
			<Toolbar />

			<List></List>
		</Drawer>
	)
}
