'use client'

import { useCreateModalImages } from '@/hooks/use-create-modal-images'
import { useOpenModal } from '@/hooks/use-open-modal'
import { PostActions } from '@/redux/post/async-action'
import { Typography } from '@mui/material'
import { Plus } from 'lucide-react'
import { FC, useState } from 'react'
import { ButtonUI, ModalFormUI } from '../ui'
import { CreatePostModalContent } from './create-post-modal-content'

export const CreatePostModal: FC = () => {
	const { open, handleOpen, setOpen } = useOpenModal()
	const [text, setText] = useState<string>('')
	const postActions = new PostActions()

	const {
		selectedImage,
		setSelectedImage,
		setImgUrl,
		onClickButtonSubmit,
		handleClose,
	} = useCreateModalImages({
		apiActions: postActions.createPost,
		setOpen,
		text,
		setText,
		muddlewareName: 'post',
	})

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
