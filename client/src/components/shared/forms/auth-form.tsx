'use client'
import { zodResolver } from '@hookform/resolvers/zod'

import { ProgressSkeletonUI } from '@/components/ui/circle-skeleton'
import { useOpenModal } from '@/hooks/use-open-modal'
import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import { unwrapResult } from '@reduxjs/toolkit'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ButtonUI, ModalFormUI } from '../../ui'
import { FormItem } from '../form-item'
import { PasswordVisibleToggle } from '../password-visible-toggle'
import { loginFormSchema, TLoginFormSchema } from './schema'

export const AuthForm: FC = () => {
	const { open, handleClose, handleOpen, setOpen } = useOpenModal()
	const { dispatch, fetchAuth, router, status } = useSubmitFormData()
	const [loading, setLoading] = useState<boolean>(false)
	const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

	const form = useForm({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	})

	const onSubmit = async (data: TLoginFormSchema) => {
		setLoading(true)
		try {
			const resultAction = await dispatch(fetchAuth.login(data))

			unwrapResult(resultAction)
			router.push('/feed')

			toast.success('Вы успешно авторизовались')
		} catch (e) {
			console.error(e)
			setLoading(false)
			toast.error('Неправильный логин или пароль')
		}
	}

	return (
		<>
			<ButtonUI width='80%' click={handleOpen} variant='outlined'>
				Войти
			</ButtonUI>
			<FormProvider {...form}>
				<ModalFormUI
					width={500}
					open={open}
					handleCloseModal={handleClose}
					buttonTextSubmit='Войти'
					onClickButtonSubmit={form.handleSubmit(onSubmit)}
					titleText='Авторизация'
					alignTitle='center'
					weightTitle={600}
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
						type={visiblePassword ? 'text' : 'password'}
						autoComplete='current-password'
					>
						<PasswordVisibleToggle
							onClick={() => setVisiblePassword(!visiblePassword)}
							visible={visiblePassword}
						/>
					</FormItem>
				</ModalFormUI>
			</FormProvider>
			{loading && <ProgressSkeletonUI />}
		</>
	)
}
