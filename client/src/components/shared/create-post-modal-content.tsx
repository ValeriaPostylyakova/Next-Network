'use client'

import Box from '@mui/material/Box'
import { ChangeEvent, FC } from 'react'
import { CreatePostModalImageEmpty } from './create-post-modal-image-empty'

interface Props {
	setImgUrl: (file: File | undefined) => void
	setSelectedImage: (value: string | null) => void
	text: string
	setText: (value: string) => void
	selectedImage: string | null
}

export const CreatePostModalContent: FC<Props> = ({
	setImgUrl,
	setSelectedImage,
	text,
	setText,
	selectedImage,
}) => {
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

	return (
		<Box
			sx={{
				width: '450px',
				m: '0 auto',
			}}
		>
			{!selectedImage ? (
				<CreatePostModalImageEmpty handleImageChange={handleImageChange} />
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
				name='text'
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
					scrollbarWidth: 'thin',
					scrollbarColor: '#888 #363636',
				}}
				onChange={e => setText(e.target.value)}
				value={text}
			/>
		</Box>
	)
}
