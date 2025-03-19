'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { ProfileForm, inputFields } from '@/json/edit-profile-modal'
import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import { unwrapResult } from '@reduxjs/toolkit'
import { FC, FormEvent, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { ButtonUI, InputFormUI, ModalFormUI } from '../ui'

export interface Props {
	profile: TProfile
}

const userActions = new FetchAuth()

export const EditProfileModal: FC<Props> = ({ profile }) => {
	const { open, setOpen, handleClose } = useOpenModal()
	const dispatch: AppDispatch = useDispatch()
	const [profileForm, setProfileForm] = useState<ProfileForm>({
		firstname: profile.firstname || '',
		lastname: profile.lastname || '',
		jobTitle: profile.jobTitle || '',
		identifier: profile.identifier || '',
	})

	const handleInputChange = useCallback(
		(name: keyof ProfileForm, value: string) => {
			setProfileForm({
				...profileForm,
				[name]: value,
			})
		},
		[profileForm]
	)

	const handleSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			try {
				const res = await dispatch(
					userActions.updateProfile({
						id: profile.id,
						...profileForm,
					})
				)

				if (res.payload == null) {
					toast.error('Изменений нет')
					return
				}

				unwrapResult(res)
				toast.success('Изменения успешно сохранены')
				handleClose()
			} catch (e) {
				console.error(e)
				toast.error('Ошибка при изменении профиля')
			}
		},
		[dispatch, profileForm]
	)

	return (
		<Box>
			<ButtonUI click={() => setOpen(true)} variant='outlined'>
				Изменить
			</ButtonUI>
			<ModalFormUI
				width={500}
				open={open}
				handleCloseModal={handleClose}
				buttonTextSubmit='Сохранить'
				onClickButtonSubmit={handleSubmit}
				weightTitle={500}
				alignTitle='left'
			>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '1rem',
					}}
				>
					{inputFields.map(field => (
						<InputFormUI
							key={field.name}
							labelText={field.labelText}
							value={profileForm[field.name] as string}
							setValue={(value: string) => handleInputChange(field.name, value)}
						/>
					))}
				</Box>
			</ModalFormUI>
		</Box>
	)
}
