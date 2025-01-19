'use client'
import Box from '@mui/material/Box'
import { FC, useState } from 'react'
import { ButtonUI } from '../ui'
import { ModalFormUI } from '../ui/modal-form'
import { FormItem } from './form-item'

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
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<FormItem label='Введите почту' placeholder='Введите вашу почту' />
					<FormItem label='Введите пароль' placeholder='Введите ваш пароль' />
				</Box>
			</ModalFormUI>
		</>
	)
}
