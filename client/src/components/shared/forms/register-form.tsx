'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ButtonUI } from '../../ui'
import { ModalFormUI } from '../../ui/modal-form'
import { FormItem } from '../form-item'
import { TRegisterForm, registerFormSchema } from './schema'

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

	const form = useForm<TRegisterForm>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
	})

	const onSubmit = (data: TRegisterForm) => {
		console.log(data)
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

			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
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
							<FormItem label='Введите почту' name='email' />
							<FormItem
								label='Придумайте пароль'
								type='password'
								name='password'
							/>
							<FormItem
								label='Повторите пароль'
								type='password'
								name='confirmPassword'
							/>
						</Box>
					</ModalFormUI>
				</form>
			</FormProvider>
		</>
	)
}
