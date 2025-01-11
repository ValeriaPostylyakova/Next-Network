'use client'

import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ButtonUI } from '../ui'
import { ModalFormUI } from '../ui/modal-form'

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
