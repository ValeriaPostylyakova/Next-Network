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
import { TRegisterForm, registerFormSchema } from './schema'

export const RegisterForm: FC = () => {
	const { open, handleClose, handleOpen, setOpen } = useOpenModal()
	const { dispatch, status, fetchAuth, router } = useSubmitFormData()
	const [loading, setLoading] = useState<boolean>(false)
	const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

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
		setLoading(true)

		try {
			const resultAction = await dispatch(fetchAuth.registration(data))
			unwrapResult(resultAction)
			toast.success('Вы успешно зарегистрировались')
			setOpen(false)
			setLoading(false)
		} catch (e) {
			console.error(e)
			setLoading(false)
			toast.error(
				'Возможно, пользователь с такой почтой уже существует. Пожалуйста, введите другую почту и попробуйте снова'
			)
		}
	}

	return (
		<>
			<ButtonUI width='80%' click={handleOpen} variant='contained' m='2rem'>
				Зарегистрироваться
			</ButtonUI>
			<FormProvider {...form}>
				<ModalFormUI
					width={500}
					open={open}
					handleCloseModal={handleClose}
					buttonTextSubmit='Зарегистрироваться'
					onClickButtonSubmit={form.handleSubmit(onSubmit)}
					titleText='Регистрация'
					alignTitle='center'
					weightTitle={600}
				>
					<FormItem
						label='Введите свою почту'
						placeholder='Введите почту'
						name='email'
						autoComplete='email'
					/>
					<FormItem
						label='Введите свое имя'
						placeholder='Введите имя'
						name='firstname'
						autoComplete='username'
					/>
					<FormItem
						label='Введите свою фамилию'
						placeholder='Введите фамилию'
						name='lastname'
						autoComplete='username'
					/>
					<FormItem
						label='Придумайте пароль'
						type={visiblePassword ? 'text' : 'password'}
						name='password'
						autoComplete='current-password'
					>
						<PasswordVisibleToggle
							onClick={() => setVisiblePassword(!visiblePassword)}
							visible={visiblePassword}
						/>
					</FormItem>
					<FormItem
						label='Повторите пароль'
						type={visiblePassword ? 'text' : 'password'}
						name='confirmPassword'
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
