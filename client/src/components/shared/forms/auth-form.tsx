'use client'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { fetchLogin } from '@/redux/auth/async-actions'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { ButtonUI } from '../../ui'
import { FormItem } from '../form-item'
import { loginFormSchema, TLoginFormSchema } from './schema'

export interface Props {
	className?: string
}

export const AuthForm: FC<Props> = () => {
	const dispatch: AppDispatch = useDispatch()
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
		dispatch(fetchLogin(data))
	}
	return (
		<>
			<ButtonUI width='80%' click={handleClickOpen} variant='outlined'>
				Войти
			</ButtonUI>
			<FormProvider {...form}>
				<Dialog
					sx={{
						'& .MuiDialog-paper': {
							borderRadius: '1rem',
							width: '500px',
							bgcolor: '#000',
						},
					}}
					open={open}
					onClose={handleClose}
				>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<DialogTitle>Авторизация</DialogTitle>
						<DialogContent>
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
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Отмена</Button>
							<Button type='submit'>Войти</Button>
						</DialogActions>
					</form>
				</Dialog>
			</FormProvider>
		</>
	)
}
