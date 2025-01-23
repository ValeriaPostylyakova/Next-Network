'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { ArrowUpFromDot, Plus } from 'lucide-react'
import { ChangeEvent, FC, useState } from 'react'
import { ButtonUI, ModalUI } from '../ui'

export interface Props {}

export const CreatePostModal: FC<Props> = () => {
	const { open, handleClose, handleOpen } = useOpenModal()

	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]

		if (file) {
			const reader = new FileReader()

			reader.onload = e => {
				setSelectedImage(e.target?.result as string)
			}

			reader.readAsDataURL(file)
		}
	}

	{
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
							<div>
								<img
									src={selectedImage}
									alt='Uploaded'
									style={{ maxWidth: '400px' }}
								/>
							</div>
						)}
					</Box>
				</Box>
			</ModalUI>
		</>
	)
}
