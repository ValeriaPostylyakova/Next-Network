'use client'
import { zodResolver } from '@hookform/resolvers/zod'

import { useOpenModal } from '@/hooks/use-open-modal'
import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import { RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { ButtonUI } from '../../ui'
import { FormItem } from '../form-item'
import { loginFormSchema, TLoginFormSchema } from './schema'

export const AuthForm: FC = () => {
	const { open, handleClose, handleOpen, setOpen } = useOpenModal()
	const { dispatch, user, fetchAuth, router, status } = useSubmitFormData()
	const error = useSelector((state: RootState) => state.auth.error)

	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: TLoginFormSchema) => {
		await dispatch(fetchAuth.login(data))

		if (error) {
			toast.error(error)
		} else {
			router.push('/feed')
			toast.success('Вы успешно авторизовались')
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
