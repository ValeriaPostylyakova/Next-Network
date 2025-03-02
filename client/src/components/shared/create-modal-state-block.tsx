import { renderFileImage } from '@/libs/render-file-image'
import Box from '@mui/material/Box'
import { Dispatch, FC, SetStateAction } from 'react'
import { CreatePostModalImageEmpty } from './create-post-modal-image-empty'

export interface Props {
	setImgUrl: Dispatch<SetStateAction<File | undefined>>
	heightImage?: string
	setSelectedImage: Dispatch<SetStateAction<string | null>>
	selectedImage: string | null
}

export const CreateModalStateBlock: FC<Props> = ({
	setImgUrl,
	setSelectedImage,
	selectedImage,
	heightImage,
}) => {
	return (
		<>
			{!selectedImage ? (
				<CreatePostModalImageEmpty
					handleImageChange={e =>
						renderFileImage(e, setImgUrl, setSelectedImage)
					}
				/>
			) : (
				<Box>
					<img
						src={selectedImage}
						alt='Uploaded'
						style={{ width: '100%', height: heightImage }}
					/>
				</Box>
			)}
		</>
	)
}
