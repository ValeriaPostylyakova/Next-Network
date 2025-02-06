import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Plus } from 'lucide-react'
import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {
	id: number
	imageUrl?: string
	firstname: string
	lastname: string
	identifier: string
}

export const SidebarRightItem: FC<Props> = ({
	imageUrl,
	firstname,
	lastname,
	identifier,
}) => {
	return (
		<>
			<ListItem disablePadding>
				<ListItemButton
					sx={{ py: 2, display: 'flex', justifyContent: 'space-between' }}
				>
					<UserInfoName
						width={40}
						height={40}
						image={imageUrl ? imageUrl : '/images/user-profile.svg'}
						sizeTitle={16}
						sizeSubTitle={14}
						text={`@${identifier}`}
						name={firstname + ' ' + lastname}
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
