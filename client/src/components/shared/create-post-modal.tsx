'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { ArrowUpFromDot, Plus } from 'lucide-react'
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI, ModalUI } from '../ui'

export interface Props {}

export const CreatePostModal: FC<Props> = () => {
	const { open, handleClose, handleOpen } = useOpenModal()
	const dispatch: AppDispatch = useDispatch()
	const id = useSelector((state: RootState) => state.profile.profileInfo?.id)
	const postImages = useSelector((state: RootState) => state.profile.postImages)

	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [text, setText] = useState<string>('')
	const [imgUrl, setImgUrl] = useState<any | null>(null)
	const profileActions = new ProfileActions()

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		setImgUrl(file)

		if (file) {
			const reader = new FileReader()

			reader.onload = e => {
				setSelectedImage(e.target?.result as string)
			}

			reader.readAsDataURL(file)
		}
	}

	const onClickButtonCreate = async () => {
		const dataImages = new FormData()
		dataImages.append('postImageUrl', imgUrl as string)

		dispatch(
			profileActions.createPost({
				dataImages,
				text,
				id,
			})
		)
		// handleClose()
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
			<ModalUI
				width={500}
				buttonText='Создать'
				open={open}
				handleClose={handleClose}
				onClickButtonCreate={onClickButtonCreate}
			>
				<Box>
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
					<Box
						sx={{
							width: '450px',
							m: '0 auto',
						}}
					>
						{!selectedImage ? (
							<Box
								sx={{
									width: '100%',
									height: '300px',
									borderWidth: '1px',
									borderColor: '#888888',
									borderStyle: 'dashed',
									borderRadius: 2,
									mb: 2,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										gap: '1rem',
									}}
								>
									<Box
										sx={{
											px: 1.5,
											py: 1,
											borderWidth: '2px',
											borderColor: '#fff',
											borderStyle: 'dashed',
											borderRadius: 3,
										}}
									>
										<ArrowUpFromDot size={30} />
									</Box>
									<Typography
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
										fontSize='18px'
										mb={2}
									>
										Добавьте фото или видео
									</Typography>

									<input type='file' onChange={handleImageChange} />
								</Box>
							</Box>
						) : (
							<Box>
								<img
									src={selectedImage}
									alt='Uploaded'
									style={{ maxWidth: '400px' }}
								/>
							</Box>
						)}
						<textarea
							placeholder='Напишите что-нибудь...'
							rows={7}
							style={{
								width: '100%',
								resize: 'none',
								padding: '10px',
								outline: 'none',
								border: 'none',
								fontSize: '16px',
								color: '#fff',
								backgroundColor: 'inherit',
							}}
							onChange={e => setText(e.target.value)}
							value={text}
						/>
					</Box>
				</Box>
			</ModalUI>
		</>
	)
}
