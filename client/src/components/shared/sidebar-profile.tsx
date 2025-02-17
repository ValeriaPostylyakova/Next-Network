'use client'

import Box from '@mui/material/Box'

import { RootState } from '@/redux/store'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ProfileSkeleton } from '../ui/profile-skeleton'
import { UserInfoName } from './user-info-name'

export const SidebarProfile: FC = () => {
	const profile = useSelector((state: RootState) => state.auth.profile)
	const status = useSelector((state: RootState) => state.auth.status)

	return (
		<Link href={`/profile/${profile.id}`}>
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
				{status === 'loading' ? (
					<ProfileSkeleton
						width={40}
						heightLineTop={14}
						widthLineTop={200}
						heightLineBottom={12}
						widthLineBottom={140}
						widthContainer='auto'
					/>
				) : (
					<UserInfoName
						text={`@${profile.identifier}`}
						width={40}
						height={40}
						image={
							profile.imageUrl
								? profile.imageUrl
								: '/images/profile-profile.svg'
						}
						sizeTitle={16}
						sizeSubTitle={14}
						name={profile?.firstname + ' ' + profile?.lastname}
					/>
				)}
			</Box>
		</Link>
	)
}
