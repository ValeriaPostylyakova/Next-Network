'use client'

import {
	Box,
	Drawer,
	List,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material/'
import {
	House,
	Logs,
	Music,
	Search,
	Settings,
	Target,
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
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
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
			<Toolbar
				sx={{
					pt: 3,
					ml: -1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
				}}
			>
				<FlexContainer mb='2rem'>
					<Target />
					<Typography
						sx={{
							textTransform: 'uppercase',
							fontSize: '16px',
							cursor: 'pointer',
							fontWeight: 600,
						}}
					>
						Next Network
					</Typography>
				</FlexContainer>
				<Box
					sx={{
						position: 'relative',
						ml: -1,
					}}
				>
					<Search
						style={{
							position: 'absolute',
							top: '50%',
							left: '10px',
							transform: 'translateY(-50%)',
							color: '#c2c2c2',
						}}
					/>
					<TextField
						size='small'
						sx={{
							width: '100%',
							outline: 'none',
							'.MuiOutlinedInput-root': {
								borderRadius: 4.3,
								pl: '30px',
							},
						}}
						placeholder='Search'
					/>
				</Box>
			</Toolbar>
			<List sx={{ mt: 4 }}>
				<SidebarItem text='Feed' icons={<House />} />
				<SidebarItem text='Stories' icons={<Logs />} />
				<SidebarItem text='Friends' icons={<Users />} />
				<SidebarItem text='Settings' icons={<Settings />} />
				<SidebarItem text='Music' icons={<Music />} />
			</List>
			<SidebarProfile />
		</Drawer>
	)
}
