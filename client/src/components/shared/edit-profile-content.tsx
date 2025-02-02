'use client'

import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI, FlexContainer, MainBlock } from '../ui'
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
				<FlexContainer mb='1rem' content='space-between'>
					<FlexContainer>
						<Image
							src='/images/user-profile.svg'
							alt='avatar'
							width={100}
							height={100}
						/>
						<Box>
							<Typography>{profileInfo?.fullname}</Typography>
							<Typography sx={{ color: '#929292', mb: 2 }}>
								{profileInfo?.jobTitle}
							</Typography>
							<Typography>@{profileInfo?.identifier}</Typography>
						</Box>
					</FlexContainer>
					<ButtonUI variant='outlined'>Изменить</ButtonUI>
				</FlexContainer>
			</MainBlock>
			<MainBlock mt={-20}>
				<SettingsBlock
					title='Email'
					content='valeria.postylyakova@mail.ru'
					typographyText='Контактная информация'
				/>
				<SettingsBlock title='Phone' content='8 (995)-375-77-04' />
			</MainBlock>
		</>
	)
}
