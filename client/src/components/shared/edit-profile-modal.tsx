'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { AppDispatch } from '@/redux/store'
import { FetchAuth } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { ButtonUI, InputFormUI } from '../ui'

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
			<Dialog open={open} onClose={handleClose}>
				<form>
					<DialogContent
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
							labelText='Ваша должность'
							value={jobTitle}
							setValue={setJobTitle}
						/>
						<InputFormUI
							labelText='Ваш никнейм'
							value={identifier}
							setValue={setIdentifier}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Отмена</Button>
						<Button type='submit' onClick={e => handleSubmit(e)}>
							Сохранить
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</Box>
	)
}
