import Box from '@mui/material/Box'
import { Dispatch, FC, SetStateAction } from 'react'
import { CreateModalStateBlock } from './create-modal-state-block'

interface Props {
	setImgUrl: Dispatch<SetStateAction<File | null>>
	setSelectedImage: Dispatch<SetStateAction<string | null>>
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
	return (
		<Box
			sx={{
				width: '450px',
				m: '0 auto',
			}}
		>
			<CreateModalStateBlock
				selectedImage={selectedImage}
				setImgUrl={setImgUrl}
				setSelectedImage={setSelectedImage}
			/>
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
					color: 'inherit',
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
