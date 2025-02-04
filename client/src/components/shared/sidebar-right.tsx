'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { RootState } from '@/redux/store'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { SidebarRightButtonGroup } from './sidebar-right-button-group'
import { SidebarRightItem } from './sidebar-right-item'

export interface Props {
	className?: string
}

export const SidebarRight: FC<Props> = () => {
	const user = useSelector((state: RootState) => state.auth.user)
	return (
		<Drawer
			sx={{
				width: 360,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: 360,
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
				<Link href={`/profile/${user.id}`}>
					<img
						src={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
						alt='avatar'
						width={40}
						height={40}
						style={{
							borderRadius: '50%',
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
				</Link>

				<SidebarRightButtonGroup />
			</Toolbar>
			<Divider />
			<Box
				sx={{
					p: 2.5,
				}}
			>
				<Typography variant='h6'>Возможные друзья</Typography>
			</Box>
			<Divider />
			<List>
				<SidebarRightItem />
				<SidebarRightItem />
				<SidebarRightItem />
				<SidebarRightItem />
			</List>
		</Drawer>
	)
}
