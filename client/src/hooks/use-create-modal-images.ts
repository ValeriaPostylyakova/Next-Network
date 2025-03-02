'use client'

import { AppDispatch } from '@/redux/store'
import { FormEvent, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

interface Props {
	apiActions: any
	setOpen: (value: boolean) => void
	setText?: (value: string) => void
	text?: string
}

export const useCreateModalImages = ({
	apiActions,
	setOpen,
	setText,
	text,
}: Props) => {
	const dispatch: AppDispatch = useDispatch()
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [imgUrl, setImgUrl] = useState<any | null>(null)

	const onClickButtonSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			try {
				e.preventDefault()
				const formData = new FormData()
				text && formData.append('text', text)
				formData.append('post', imgUrl)

				await dispatch(apiActions.createPost(formData)).then(() => {
					handleClose()
					setSelectedImage(null)
					setText && setText('')
					toast.success('Пост успешно создан!')
				})
			} catch (error) {
				toast.error('Ошибка при создании поста')
				console.log(error)
			}
		},
		[dispatch, apiActions, text, imgUrl]
	)

	const handleClose = () => {
		setOpen(false)
		setSelectedImage(null)
		setText && setText('')
	}

	return {
		selectedImage,
		setSelectedImage,
		imgUrl,
		setImgUrl,
		onClickButtonSubmit,
		handleClose,
	}
}
