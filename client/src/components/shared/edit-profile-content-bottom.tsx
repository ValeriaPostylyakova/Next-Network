'use client'

import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { unwrapResult } from '@reduxjs/toolkit'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { IMaskInput } from 'react-imask'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { TEditInfo } from './edit-profile-content'
import { SettingsBlock } from './settings-block'

export interface Props {
	profile: TProfile
}

export const EditProfileContentBottom: FC<Props> = ({ profile }) => {
	const userActions = new FetchAuth()
	const dispatch: AppDispatch = useDispatch()

	const [editMode, setEditMode] = useState<TEditInfo>({
		email: profile.email,
		phone: profile.phone,
	})
	const [openInput, setOpenInput] = useState<boolean>(false)
	const [editedPhone, setEditedPhone] = useState<boolean>(false)

	const handleClickInput = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			try {
				const resultAction = await dispatch(
					userActions.updateProfileEmail({
						id: profile.id,
						email: editMode.email,
					})
				)
				setOpenInput(false)
				unwrapResult(resultAction)
				toast.success('Изменения успешно сохранены')
			} catch (e) {
				console.error(e)
				toast.error('Ошибка при сохранении изменений')
			}
		}
	}

	const handleClickInputPhone = async (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.code === 'Enter') {
			try {
				const resultAction = await dispatch(
					userActions.updateProfilePhone({
						id: profile.id,
						phone: editMode.phone,
					})
				)
				setEditedPhone(false)
				unwrapResult(resultAction)
				toast.success('Изменения успешно сохранены')
			} catch (e) {
				console.error(e)
				toast.error('Ошибка при сохранении изменений')
			}
		}
	}
	return (
		<>
			<SettingsBlock
				open={editedPhone}
				setStateOpen={setEditedPhone}
				typographyText='Контактная информация'
				sizeTitle={17}
				myTitle={2}
				mbTitle={2}
				title='Phone'
			>
				{editedPhone ? (
					<IMaskInput
						type='text'
						value={editMode.phone}
						onAccept={value => setEditMode({ ...editMode, phone: value })}
						onKeyDown={handleClickInputPhone}
						mask={'+{7}(000)000-00-00'}
						style={{
							backgroundColor: 'inherit',
							color: '#fff',
							fontSize: '16px',
							borderRadius: 6,
							padding: '5px 10px',
						}}
					/>
				) : (
					<Typography>
						{profile.phone === null ? 'Не указан' : profile.phone}
					</Typography>
				)}
			</SettingsBlock>
			<SettingsBlock
				open={openInput}
				setStateOpen={setOpenInput}
				myTitle={0}
				mbTitle={2}
				title='Email'
			>
				{openInput ? (
					<TextField
						size='small'
						type='text'
						sx={{
							backgroundColor: 'inherit',
							color: '#fff',
						}}
						value={editMode.email}
						onKeyDown={handleClickInput}
						onChange={e => setEditMode({ ...editMode, email: e.target.value })}
					/>
				) : (
					<Typography>{profile.email}</Typography>
				)}
			</SettingsBlock>
		</>
	)
}
