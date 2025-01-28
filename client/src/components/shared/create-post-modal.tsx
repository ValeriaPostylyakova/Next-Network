'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Typography,
} from '@mui/material'
import { Plus } from 'lucide-react'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { ButtonUI } from '../ui'
import { CreatePostModalContent } from './create-post-modal-content'

export const CreatePostModal: FC = () => {
	const { open, handleOpen, setOpen } = useOpenModal()
	const dispatch: AppDispatch = useDispatch()
	const postActions = new PostActions()

	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [text, setText] = useState<string>('')
	const [imgUrl, setImgUrl] = useState<any | null>(null)

	const handleClose = () => {
		setOpen(false)
		setSelectedImage(null)
		setText('')
	}

	const onClickButtonSubmit = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			const formData = new FormData()
			formData.append('text', text)
			formData.append('post', imgUrl)

			dispatch(postActions.createPost(formData)).then(data => {
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

	return (
		<>
			<ButtonUI
				click={handleOpen}
				variant='contained'
				bgcolor='#5145d6'
				color='#fff'
			>
				Add New Post
				<Plus style={{ color: '#fff' }} />
			</ButtonUI>
			<Dialog
				sx={{
					'& .MuiDialog-paper': {
						borderRadius: '1rem',
						width: `500px`,
						bgcolor: '#000',
					},
				}}
				open={open}
				onClose={handleClose}
			>
				<form onSubmit={e => onClickButtonSubmit(e)}>
					<DialogContent>
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
					</DialogContent>
					<DialogActions>
						<Button type='submit'>Создать</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}
