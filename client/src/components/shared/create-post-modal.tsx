'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import { Typography } from '@mui/material'
import { Plus } from 'lucide-react'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { ButtonUI, ModalFormUI } from '../ui'
import { CreatePostModalContent } from './create-post-modal-content'

export const CreatePostModal: FC = () => {
	const { open, handleOpen, setOpen } = useOpenModal()
	const dispatch: AppDispatch = useDispatch()
	const postActions = new PostActions()

	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [text, setText] = useState<string>('')
	const [imgUrl, setImgUrl] = useState<any | null>(null)

	const onClickButtonSubmit = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const formData = new FormData()
			formData.append('text', text)
			formData.append('post', imgUrl)

			await dispatch(postActions.createPost(formData)).then(() => {
				handleClose()
				setSelectedImage(null)
				setText('')
				toast.success('Пост успешно создан!')
			})
		} catch (error) {
			toast.error('Ошибка при создании поста')
			console.log(error)
		}
	}

	const handleClose = () => {
		setOpen(false)
		setSelectedImage(null)
		setText('')
	}

	return (
		<>
			<ButtonUI
				click={handleOpen}
				variant='contained'
				bgcolor='#5145d6'
				color='#fff'
			>
				Создать пост
				<Plus style={{ color: '#fff' }} />
			</ButtonUI>
			<ModalFormUI
				open={open}
				handleCloseModal={handleClose}
				onClickButtonSubmit={onClickButtonSubmit}
				width={500}
				buttonTextSubmit='Создать'
			>
				<Typography
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					fontSize='15px'
					mb={2}
				>
					Новый пост
				</Typography>
				<CreatePostModalContent
					selectedImage={selectedImage}
					text={text}
					setText={setText}
					setImgUrl={setImgUrl}
					setSelectedImage={setSelectedImage}
				/>
			</ModalFormUI>
		</>
	)
}
