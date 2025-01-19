'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ButtonUI } from '../ui'
import { ModalFormUI } from '../ui/modal-form'
import { FormItem } from './form-item'

export interface Props {
	className?: string
}

export const RegisterForm: FC<Props> = () => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			<ButtonUI width='80%' bgcolor='#fff' m='0.3rem' variant='contained'>
				<Image src='/google.png' alt='google' width={20} height={20} />
				Google
			</ButtonUI>
			<Divider
				variant='fullWidth'
				sx={{
					width: '80%',
				}}
			>
				или
			</Divider>

			<ButtonUI
				width='80%'
				click={handleClickOpen}
				variant='contained'
				m='2rem'
			>
				Зарегистрироваться
			</ButtonUI>
			<ModalFormUI
				open={open}
				handleClose={handleClose}
				buttonText='Зарегистрироваться'
				dialogTitle='Регистрация'
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<FormItem label='Введите почту' />
					<FormItem label='Придумайте пароль' />
					<FormItem label='Повторите пароль' />
				</Box>
			</ModalFormUI>
		</>
	)
}
