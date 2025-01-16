'use client'
import TextField from '@mui/material/TextField'
import { FC, useState } from 'react'
import { ButtonUI } from '../ui'
import { ModalFormUI } from '../ui/modal-form'

export interface Props {
	className?: string
}

export const AuthForm: FC<Props> = () => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			<ButtonUI width='80%' click={handleClickOpen} variant='outlined'>
				Войти
			</ButtonUI>
			<ModalFormUI
				open={open}
				handleClose={handleClose}
				buttonText='Войти'
				dialogTitle='Авторизация'
			>
				<TextField
					autoFocus
					required
					margin='dense'
					id='name'
					name='email'
					label='Email Address'
					type='email'
					fullWidth
					variant='filled'
				/>
				<TextField
					autoFocus
					required
					margin='dense'
					id='name'
					name='email'
					label='Email Address'
					type='email'
					fullWidth
					variant='filled'
				/>
			</ModalFormUI>
		</>
	)
}
