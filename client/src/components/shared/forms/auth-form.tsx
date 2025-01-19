'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ButtonUI } from '../../ui'
import { ModalFormUI } from '../../ui/modal-form'
import { FormItem } from '../form-item'
import { loginFormSchema, TLoginFormSchema } from './schema'

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

	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = (data: TLoginFormSchema) => {
		console.log(data)
	}
	return (
		<>
			<ButtonUI width='80%' click={handleClickOpen} variant='outlined'>
				Войти
			</ButtonUI>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
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
							<FormItem
								name='email'
								label='Введите почту'
								placeholder='Введите вашу почту'
							/>
							<FormItem
								name='password'
								label='Введите пароль'
								placeholder='Введите ваш пароль'
								type='password'
							/>
						</Box>
					</ModalFormUI>
				</form>
			</FormProvider>
		</>
	)
}
