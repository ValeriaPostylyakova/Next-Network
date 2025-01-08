import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	text: string
	icons: ReactNode
}

export const SidebarItem: FC<Props> = ({ text, icons }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton sx={{ py: 2 }}>
				<ListItemIcon sx={{ color: '#a6a6a6' }}>{icons}</ListItemIcon>
				<ListItemText sx={{ ml: -2 }} primary={text} />
			</ListItemButton>
		</ListItem>
	)
}
