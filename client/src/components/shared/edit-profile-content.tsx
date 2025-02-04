'use client'

import { AppDispatch, RootState } from '@/redux/store'
import { FetchAuth } from '@/redux/user/async-actions'
import { Box, Divider, TextField, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlexContainer, MainBlock } from '../ui'
import { EditProfileModal } from './edit-profile-modal'
import { EditorProfileAvatar } from './editor-profile-avatar'
import { SettingsBlock } from './settings-block'

export const EditProfileContent: FC = () => {
	const user = useSelector((state: RootState) => state.auth.user)

	const dispatch: AppDispatch = useDispatch()

	const userActions = new FetchAuth()

	const [clickButtonPhone, setClickButtonPhone] = useState<boolean>(false)
	const [clickButtonEmail, setClickButtonEmail] = useState<boolean>(false)
	const [email, setEmail] = useState<string>(user.email)
	const [phone, setPhone] = useState<string>('Не указан')

	const handleInputValue = (e: any) => {
		const obj = {
			id: user.id,
			firstname: user.firstname,
			lastname: user.lastname,
			jobTitle: user.jobTitle as string,
			identifier: user.identifier,
			email,
			phone,
		}
		if (e.code === 'Enter') {
			dispatch(userActions.updateProfile(obj))
		}
	}

	return (
		<>
			<MainBlock>
				<Typography marginBottom={4}>Профиль</Typography>
				<FlexContainer mb='2rem' content='space-between'>
					<FlexContainer>
						<EditorProfileAvatar user={user} />
						<Box>
							<Typography>{user.firstname + ' ' + user.lastname}</Typography>
							<Typography sx={{ color: '#929292', mb: 2 }}>
								{user.jobTitle}
							</Typography>
							<Typography>@{user.identifier}</Typography>
						</Box>
					</FlexContainer>
					<EditProfileModal user={user} />
				</FlexContainer>
				<Divider />
				<SettingsBlock
					typographyText='Контактная информация'
					sizeTitle={17}
					myTitle={2}
					mbTitle={2}
					title='Phone'
					setClick={setClickButtonPhone}
				>
					<TextField
						className={clickButtonPhone ? 'click-button-input' : 'button-input'}
						type='text'
						value={phone}
						onChange={e => setPhone(e.target.value)}
						onKeyDown={e => handleInputValue(e)}
					/>
				</SettingsBlock>
				<SettingsBlock
					myTitle={0}
					mbTitle={2}
					title='Email'
					setClick={setClickButtonEmail}
				>
					<TextField
						className={clickButtonPhone ? 'click-button-input' : 'button-input'}
						type='text'
						value={email}
						onChange={e => setEmail(e.target.value)}
						onKeyDown={e => handleInputValue(e)}
					/>
				</SettingsBlock>
			</MainBlock>
		</>
	)
}
