'use client'

import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { Box, Divider, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlexContainer, MainBlock } from '../ui'
import { EditProfileModal } from './edit-profile-modal'
import { SettingsBlock } from './settings-block'

export interface Props {
	id: string
}

export const EditProfileContent: FC<Props> = ({ id }) => {
	const profileActions = new ProfileActions()
	const dispatch: AppDispatch = useDispatch()

	const profileInfo = useSelector(
		(state: RootState) => state.profile.profileInfo
	)

	useEffect(() => {
		async function fetchProfileData() {
			dispatch(profileActions.profile(id))
		}

		fetchProfileData()
	}, [dispatch])

	return (
		<>
			<MainBlock>
				<Typography marginBottom={4}>Профиль</Typography>
				<FlexContainer mb='2rem' content='space-between'>
					<FlexContainer>
						<img
							src={
								profileInfo?.imageUrl
									? profileInfo.imageUrl
									: '/images/user-profile.svg'
							}
							alt='avatar'
							width={100}
							height={100}
							style={{
								borderRadius: '50%',
								objectFit: 'cover',
								objectPosition: 'center',
							}}
						/>
						<Box>
							<Typography>
								{profileInfo?.firstname + ' ' + profileInfo?.lastname}
							</Typography>
							<Typography sx={{ color: '#929292', mb: 2 }}>
								{profileInfo?.jobTitle}
							</Typography>
							<Typography>@{profileInfo?.identifier}</Typography>
						</Box>
					</FlexContainer>
					<EditProfileModal profileInfo={profileInfo} />
				</FlexContainer>
				<Divider />
				<SettingsBlock
					typographyText='Контактная информация'
					sizeTitle={17}
					myTitle={2}
					mbTitle={2}
					title='Phone'
					content='8 (995)-375-77-04'
				/>
				<SettingsBlock
					myTitle={0}
					mbTitle={2}
					title='Email'
					content='valeria@gmail.com'
				/>
			</MainBlock>
		</>
	)
}
