'use client'
import { zodResolver } from '@hookform/resolvers/zod'

import { useOpenModal } from '@/hooks/use-open-modal'
import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ButtonUI } from '../../ui'
import { FormItem } from '../form-item'
import { loginFormSchema, TLoginFormSchema } from './schema'

export const AuthForm: FC = () => {
	const { open, handleClose, handleOpen, setOpen } = useOpenModal()
	const { dispatch, fetchAuth, router, status } = useSubmitFormData()

	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: TLoginFormSchema) => {
		try {
			const resultAction = await dispatch(fetchAuth.login(data))

			unwrapResult(resultAction)
			router.push('/feed')
			toast.success('Вы успешно авторизовались')
		} catch (e) {
			console.error(e)
			toast.error('Неправильный логин или пароль')
		}
	}

	return (
		<>
			<ButtonUI width='80%' click={handleOpen} variant='outlined'>
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
									autoComplete='email'
								/>
								<FormItem
									name='password'
									label='Введите пароль'
									placeholder='Введите ваш пароль'
									type='password'
									autoComplete='current-password'
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
