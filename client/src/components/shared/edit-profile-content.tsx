'use client'

import { RootState } from '@/redux/store'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { EditUserInfoSkeleton, EditUserSkeleton, MainBlock } from '../ui'
import { EditProfileContentBottom } from './edit-profile-content-bottom'
import { EditProfileContentTop } from './edit-profile-content-top'

export type TEditInfo = {
	email: string
	phone: string
}

export const EditProfileContent: FC = () => {
	const profile = useSelector((state: RootState) => state.auth.profile)
	const statusUser = useSelector((state: RootState) => state.auth.status)

	return (
		<>
			<MainBlock>
				<Box
					sx={{
						width: '95%',
						m: '0 auto',
						py: 2,
					}}
				>
					<Typography marginBottom={4}>Профиль</Typography>
					{statusUser === 'loading' ? (
						<EditUserSkeleton />
					) : (
						<EditProfileContentTop profile={profile} />
					)}
					{statusUser === 'loading' ? (
						<EditUserInfoSkeleton />
					) : (
						<EditProfileContentBottom profile={profile} />
					)}
				</Box>
			</MainBlock>
		</>
	)
}
