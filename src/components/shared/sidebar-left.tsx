'use client'

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material/'
import {
	EarthLock,
	House,
	Logs,
	MessageCircle,
	Settings,
	Users,
} from 'lucide-react'
import { FC } from 'react'
import { FlexContainer } from '../ui'
import { SidebarItem } from './sidebar-item'
import { SidebarProfile } from './sidebar-profile'

export interface Props {
	drawerWidth: number
}

export const SidebarLeft: FC<Props> = ({ drawerWidth }) => {
	return (
		<Drawer
			sx={[
				theme => ({
					backgroundColor: '#aeabf5',
					width: 300,
					flexShrink: 0,
					position: 'relative',
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}),
				theme =>
					theme.applyStyles('dark', {
						backgroundColor: theme.palette.primary.main,
					}),
			]}
			variant='permanent'
			anchor='left'
		>
			<Box sx={{ mt: 5, ml: 2, cursor: 'pointer' }}>
				<FlexContainer>
					<EarthLock />
					<Typography variant='h6' sx={{ textTransform: 'uppercase' }}>
						Next network
					</Typography>
				</FlexContainer>
			</Box>
			<Toolbar />
			<Divider />
			<List>
				<SidebarItem icons={<House />} text='Feed' />
				<SidebarItem icons={<Logs />} text='Stories' />
				<SidebarItem icons={<Users />} text='Friends' />
				<SidebarItem icons={<MessageCircle />} text='Message' />
				<SidebarItem icons={<Settings />} text='Settings' />
			</List>
			<SidebarProfile />
		</Drawer>
	)
}
