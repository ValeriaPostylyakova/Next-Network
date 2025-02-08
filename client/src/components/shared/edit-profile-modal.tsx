'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { ButtonUI, InputFormUI, ModalFormUI } from '../ui'

export interface Props {
	user: TProfile
}

export const EditProfileModal: FC<Props> = ({ user }) => {
	const { open, setOpen, handleClose } = useOpenModal()
	const userActions = new FetchAuth()
	const dispatch: AppDispatch = useDispatch()
	const [firstname, setFirstname] = useState(user.firstname)
	const [lastname, setLastname] = useState(user.lastname)
	const [jobTitle, setJobTitle] = useState(user.jobTitle || '')
	const [identifier, setIdentifier] = useState(user.identifier)

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		try {
			const res = await dispatch(
				userActions.updateProfile({
					id: user.id,
					firstname,
					lastname,
					jobTitle,
					identifier,
				})
			)

			if (res.payload == null) {
				return toast.error('Изменений нет')
			}

			toast.success('Профиль успешно изменен')
			handleClose()
		} catch (e) {
			console.error(e)
			toast.error('Ошибка при изменении профиля')
		}
	}

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
			>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '1rem',
					}}
				>
					<InputFormUI
						labelText='Ваше имя'
						value={firstname}
						setValue={setFirstname}
					/>
					<InputFormUI
						labelText='Ваша фамилия'
						value={lastname}
						setValue={setLastname}
					/>
					<InputFormUI
						labelText='Ваша деятельность'
						value={jobTitle}
						setValue={setJobTitle}
					/>
					<InputFormUI
						labelText='Ваш никнейм'
						value={identifier}
						setValue={setIdentifier}
					/>
				</Box>
			</ModalFormUI>
		</Box>
	)
}
