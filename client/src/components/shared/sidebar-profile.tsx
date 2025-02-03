'use client'

import Box from '@mui/material/Box'

import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { UserInfoName } from './user-info-name'

export const SidebarProfile: FC = () => {
	const { user } = useSubmitFormData()
	const profileInfo = useSelector(
		(state: RootState) => state.profile.profileInfo
	)

	return (
		<Link href={`/profile/${user?.id}`}>
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
				{user ? (
					<UserInfoName
						text={`@${user?.identifier}`}
						width={40}
						height={40}
						image={user?.imageUrl ? user?.imageUrl : '/images/user-profile.svg'}
						sizeTitle={16}
						sizeSubTitle={14}
						name={user?.firstname + ' ' + user?.lastname}
					/>
				) : (
					<UserInfoName
						text={`@${profileInfo?.identifier}`}
						width={40}
						height={40}
						image={
							profileInfo?.imageUrl
								? profileInfo?.imageUrl
								: '/images/user-profile.svg'
						}
						sizeTitle={16}
						sizeSubTitle={14}
						name={profileInfo?.firstname + ' ' + profileInfo?.lastname}
					/>
				)}
			</Box>
		</Link>
	)
}
