import Box from '@mui/material/Box'
import List from '@mui/material/List'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import {
	House,
	MessageSquareShare,
	MessagesSquare,
	Music,
	Search,
	Settings,
	Users,
} from 'lucide-react'
import { FC } from 'react'
import { DrawerUI, FlexContainer } from '../ui'
import { SidebarItem } from './sidebar-item'
import { SidebarProfile } from './sidebar-profile'

export interface Props {}

export const SidebarLeft: FC<Props> = () => {
	return (
		<DrawerUI>
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
					<MessageSquareShare size={23} />
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
							'& .MuiOutlinedInput-root': {
								borderRadius: 4.3,
								pl: '30px',
								color: 'white',
								'& fieldset': {
									borderColor: '#ffffff',
								},
								'&:hover fieldset': {
									borderColor: '#ffffff',
								},
								'&.Mui-focused fieldset': {
									borderColor: '#ffffff',
								},
							},
						}}
						placeholder='Search'
					/>
				</Box>
			</Toolbar>
			<List sx={{ mt: 4 }}>
				<SidebarItem text='Feed' icons={<House />} link='feed' />
				<SidebarItem
					text='Messages'
					icons={<MessagesSquare />}
					link='messages'
				/>
				<SidebarItem text='Friends' icons={<Users />} link='friends' />
				<SidebarItem text='Settings' icons={<Settings />} link='settings' />
				<SidebarItem text='Music' icons={<Music />} link='music' />
			</List>
			<SidebarProfile />
		</DrawerUI>
	)
}
