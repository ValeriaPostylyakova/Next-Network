import Box from '@mui/material/Box'
import List from '@mui/material/List'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import {
	House,
	MessageSquareShare,
	MessagesSquare,
	Search,
	Settings,
	Users,
} from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { DrawerUI, FlexContainer } from '../ui'
import { SidebarItem } from './sidebar-item'
import { SidebarProfile } from './sidebar-profile'

export const SidebarLeft: FC = () => {
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
					<Link href='/feed'>
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
					</Link>
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
				<SidebarItem text='Главная' icons={<House />} link='feed' />
				<SidebarItem text='Чаты' icons={<MessagesSquare />} link='messages' />
				<SidebarItem text='Друзья' icons={<Users />} link='friends' />
				<SidebarItem text='Настройки' icons={<Settings />} link='settings' />
			</List>
			<SidebarProfile />
		</DrawerUI>
	)
}
