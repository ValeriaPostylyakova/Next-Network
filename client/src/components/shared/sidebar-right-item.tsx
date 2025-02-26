'use client'

import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { useRouter } from 'nextjs-toploader/app'
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
	id,
	imageUrl,
	firstname,
	lastname,
	identifier,
}) => {
	const router = useRouter()
	return (
		<>
			<ListItem disablePadding>
				<ListItemButton
					sx={{ py: 2, display: 'flex', justifyContent: 'space-between' }}
				>
					<div onClick={() => router.push(`/user/${id}`)}>
						<UserInfoName
							width={40}
							image={imageUrl ? imageUrl : '/images/user-profile.svg'}
							sizeTitle={16}
							sizeSubTitle={14}
							text={`@${identifier}`}
							name={firstname + ' ' + lastname}
						/>
					</div>
				</ListItemButton>
			</ListItem>
			<Divider />
		</>
	)
}
