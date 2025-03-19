import { zodResolver } from '@hookform/resolvers/zod'
import { unwrapResult } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './../redux/store'
import { useOpenModal } from './use-open-modal'

interface UseFormSubmitProps<T> {
	schema: any
	onSubmit: any
	successMessage: string
	errorMessage: string
	redirectUrl?: string
	closeModal?: boolean
}

export const useFormSubmit = <T>(props: UseFormSubmitProps<T>) => {
	const {
		schema,
		onSubmit,
		successMessage,
		errorMessage,
		redirectUrl,
		closeModal,
	} = props
	const dispatch: AppDispatch = useDispatch()
	const [loading, setLoading] = useState<boolean>(false)
	const { setOpen: setModalOpen } = useOpenModal()
	const router = useRouter()

	const form = useForm({
		resolver: zodResolver(schema),
		mode: 'onChange',
	})

	const handleSubmit = useCallback(
		async (data: FormEvent<HTMLFormElement>) => {
			setLoading(true)
			try {
				// @ts-ignore
				const resultAction = (await dispatch(onSubmit(data))) as any
				unwrapResult(resultAction)
				toast.success(successMessage)

				if (redirectUrl) {
					router.push(redirectUrl)
				}

				if (closeModal && setModalOpen) {
					setModalOpen(false) //
				}

				setLoading(false)
			} catch (e) {
				console.error(e)
				setLoading(false)
				toast.error(errorMessage)
			}
		},
		[
			dispatch,
			onSubmit,
			successMessage,
			errorMessage,
			router,
			redirectUrl,
			setModalOpen,
			closeModal,
		]
	)

	return { form, loading, handleSubmit }
}
