'use client'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useRouter } from 'nextjs-toploader/app'
import { FC, ReactNode } from 'react'
import { BadgeUI } from '../ui'

export interface Props {
	text: string
	icons: ReactNode
	link: string
	count?: number
}

export const SidebarItem: FC<Props> = ({ text, icons, link, count }) => {
	const router = useRouter()
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => router.push(`/${link}`)} sx={{ py: 2 }}>
				<ListItemIcon sx={{ color: '#ffff' }}>{icons}</ListItemIcon>
				<ListItemText sx={{ ml: -2 }} primary={text} />
				<Box
					sx={{
						pr: 1.5,
					}}
				>
					{count !== 0 && <BadgeUI count={count} />}
				</Box>
			</ListItemButton>
		</ListItem>
	)
}
