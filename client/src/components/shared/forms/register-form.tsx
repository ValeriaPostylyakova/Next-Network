'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { useOpenModal } from '@/hooks/use-open-modal'
import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ButtonUI } from '../../ui'
import { FormItem } from '../form-item'
import { TRegisterForm, registerFormSchema } from './schema'

export const RegisterForm: FC = () => {
	const { open, handleClose, handleOpen, setOpen } = useOpenModal()
	const { dispatch, status, fetchAuth, router } = useSubmitFormData()

	const form = useForm<TRegisterForm>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: '',
			firstname: '',
			lastname: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: TRegisterForm) => {
		try {
			const resultAction = await dispatch(fetchAuth.registration(data))
			unwrapResult(resultAction)
			toast.success('Вы успешно зарегистрировались')
			setOpen(false)
		} catch (e) {
			console.error(e)
			toast.error(
				'Непредвиденная ошибка при регистрации. Пожалуйста, попробуйте ещё раз'
			)
		}
	}

	return (
		<>
			<ButtonUI width='80%' click={handleOpen} variant='contained' m='2rem'>
				Зарегистрироваться
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
						<DialogTitle>Регистрация</DialogTitle>
						<DialogContent>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									gap: '1rem',
								}}
							>
								<FormItem
									label='Введите свою почту'
									placeholder='Введите почту'
									name='email'
								/>
								<FormItem
									label='Введите свое имя'
									placeholder='Введите имя'
									name='firstname'
								/>
								<FormItem
									label='Введите свою фамилию'
									placeholder='Введите фамилию'
									name='lastname'
								/>
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
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Отмена</Button>
							<Button type='submit'>Зарегистрироваться</Button>
						</DialogActions>
					</form>
				</Dialog>
			</FormProvider>
		</>
	)
}
