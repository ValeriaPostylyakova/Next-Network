'use client'

import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { House, MessagesSquare, Settings } from 'lucide-react'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ISidebarItem } from '../../../@types/sidebar-items'
import { DrawerUI, FlexContainer } from '../ui'
import { SidebarItem } from './sidebar-item'
import { SidebarLeftSearch } from './sidebar-left-search'
import { SidebarProfile } from './sidebar-profile'

const sidebarItems: ISidebarItem[] = [
	{
		text: 'Главная',
		icons: <House />,
		link: 'feed',
	},
	{
		text: 'Чаты',
		icons: <MessagesSquare />,
		link: 'messages',
	},
	{
		text: 'Настройки',
		icons: <Settings />,
		link: 'settings',
	},
]

export const SidebarLeft: FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')

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
				<FlexContainer mb={4} cursor='pointer'>
					<img
						src='/images/logo2.svg'
						alt='dashboard-logo'
						width={24}
						height={24}
					/>
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
				<SidebarLeftSearch value={searchValue} setValue={setSearchValue} />
			</Toolbar>
			<List sx={{ mt: 4 }}>
				{sidebarItems
					.filter(item =>
						item.text.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map(item => (
						<SidebarItem {...item} key={item.link} />
					))}
			</List>
			<SidebarProfile />
		</DrawerUI>
	)
}
