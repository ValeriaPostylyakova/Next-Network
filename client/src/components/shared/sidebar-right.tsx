'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { RootState } from '@/redux/store'
import Skeleton from '@mui/material/Skeleton'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AvatarUI } from '../ui'
import { SidebarRightButtonGroup } from './sidebar-right-button-group'
import { SidebarRightItem } from './sidebar-right-item'

export interface Props {
	className?: string
}

export const SidebarRight: FC<Props> = () => {
	const profile = useSelector((state: RootState) => state.auth.profile)
	const status = useSelector((state: RootState) => state.auth.status)

	const friendsSuggestion = useSelector(
		(state: RootState) => state.friendsSuggestion.friendsSuggestion
	)

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
				{status === 'loading' ? (
					<Skeleton variant='circular' width={40} height={40} />
				) : (
					<Link href={`/profile/${profile.id}`}>
						<AvatarUI width={40} imageUrl={profile.imageUrl} />
					</Link>
				)}

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
				{friendsSuggestion.map(friend => (
					<SidebarRightItem key={friend.id} {...friend} />
				))}
			</List>
		</Drawer>
	)
}
