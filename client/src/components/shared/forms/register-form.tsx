'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'

import { fetchRegistration } from '@/redux/auth/async-actions'
import { AppDispatch } from '@/redux/store'
import Image from 'next/image'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { ButtonUI } from '../../ui'
import { FormItem } from '../form-item'
import { TRegisterForm, registerFormSchema } from './schema'

export interface Props {
	className?: string
}

export const RegisterForm: FC<Props> = () => {
	const [open, setOpen] = useState(false)
	const dispatch: AppDispatch = useDispatch()

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
		dispatch(fetchRegistration(data))
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
