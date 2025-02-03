'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'

import { useOpenModal } from '@/hooks/use-open-modal'
import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import Image from 'next/image'
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
		dispatch(fetchAuth.registration(data))

		if (status === 'error') {
			toast.error('Такой пользователь уже существует')
		}

		if (status === 'success') {
			toast.success('Вы успешно зарегистрировались')
			setOpen(false)
			router.push('/feed')
		}
	}

	return (
		<>
			<ButtonUI width='80%' bgcolor='#fff' m='0.3rem' variant='contained'>
				<Image src='/images/google.png' alt='google' width={20} height={20} />
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
									label='Введите свое имя'
									placeholder='Введите имя'
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
