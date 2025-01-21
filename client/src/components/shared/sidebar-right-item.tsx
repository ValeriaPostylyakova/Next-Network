import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Plus } from 'lucide-react'
import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {}

export const SidebarRightItem: FC<Props> = () => {
	return (
		<>
			<ListItem disablePadding>
				<ListItemButton
					sx={{ py: 2, display: 'flex', justifyContent: 'space-between' }}
				>
					<UserInfoName
						width={40}
						height={40}
						image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
						sizeTitle={16}
						sizeSubTitle={14}
						text='@valera'
						name='X_AE_A-13'
					/>
					<ListItemIcon sx={{ color: '#a6a6a6' }}>
						<Plus />
					</ListItemIcon>
				</ListItemButton>
			</ListItem>
			<Divider />
		</>
	)
}
