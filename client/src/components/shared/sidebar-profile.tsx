'use client'

import Box from '@mui/material/Box'

import { RootState } from '@/redux/store'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { UserInfoName } from './user-info-name'

export const SidebarProfile: FC = () => {
	const user = useSelector((state: RootState) => state.auth.user)

	return (
		<Link href={`/profile/${user.id}`}>
			<Box
				sx={{
					position: 'absolute',
					zIndex: 20,
					bottom: '0px',
					left: '20px',
					height: '100px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
				}}
			>
				<UserInfoName
					text={`@${user.identifier}`}
					width={40}
					height={40}
					image={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
					sizeTitle={16}
					sizeSubTitle={14}
					name={user?.firstname + ' ' + user?.lastname}
				/>
			</Box>
		</Link>
	)
}
