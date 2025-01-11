import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Bell, MessageCircleMore, Settings } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI } from '../ui'
import { ButtonGroupTheme } from './button-group-theme'
import { SidebarRightItem } from './sidebar-right-item'

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
			<Toolbar
				sx={{
					pt: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						borderRadius: '100%',
						p: 0.25,
						width: '45px',
						height: '45px',
						backgroundImage:
							'url(https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						mb: 1,
					}}
				/>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
					}}
				>
					<ButtonUI variant='outlined'>
						<Bell />
					</ButtonUI>
					<ButtonUI variant='outlined'>
						<Settings />
					</ButtonUI>
					<ButtonUI variant='outlined'>
						<MessageCircleMore />
					</ButtonUI>
				</Box>
			</Toolbar>
			<Divider />
			<Box
				sx={{
					p: 2.5,
				}}
			>
				<Typography variant='h6'>Friends Suggestions</Typography>
			</Box>
			<Divider />
			<List>
				<SidebarRightItem />
				<SidebarRightItem />
				<SidebarRightItem />
				<SidebarRightItem />
			</List>
			<ButtonGroupTheme />
		</Drawer>
	)
}
