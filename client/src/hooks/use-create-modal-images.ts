'use client'

import { AppDispatch } from '@/redux/store'
import { unwrapResult } from '@reduxjs/toolkit'
import { FormEvent, useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

interface Props {
	apiActions: any
	setOpen: (value: boolean) => void
	setText?: (value: string) => void
	text?: string
	successModalText: string
	errorModalText: string
	muddlewareName: string
	childrenMiddlewareName?: string
}

export const useCreateModalImages = ({
	apiActions,
	setOpen,
	setText,
	text,
	muddlewareName,
	childrenMiddlewareName,
	successModalText,
	errorModalText,
}: Props) => {
	const dispatch: AppDispatch = useDispatch()
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [imgUrl, setImgUrl] = useState<File | null>(null)

	const onClickButtonSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			try {
				e.preventDefault()
				const formData = new FormData()
				text && formData.append('text', text)
				formData.append(muddlewareName, imgUrl as File)

				const resultAction = await dispatch(apiActions(formData))
				unwrapResult(resultAction)
				handleClose()
				toast.success(successModalText)
			} catch (error) {
				toast.error(errorModalText)
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
