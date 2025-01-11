import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { FC, ReactNode } from 'react'

export interface Props {
	text: string
	icons: ReactNode
}

export const SidebarItem: FC<Props> = ({ text, icons }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton sx={{ py: 2 }}>
				<ListItemIcon sx={{ color: '#ffff' }}>{icons}</ListItemIcon>
				<ListItemText sx={{ ml: -2 }} primary={text} />
			</ListItemButton>
		</ListItem>
	)
}
