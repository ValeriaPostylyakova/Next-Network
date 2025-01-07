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
				<ListItemIcon>{icons}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	)
}
