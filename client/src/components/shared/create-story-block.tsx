'use client'

import { useCreateModalImages } from '@/hooks/use-create-modal-images'
import { useOpenModal } from '@/hooks/use-open-modal'
import { RootState } from '@/redux/store'
import { StoriesActions } from '@/redux/stories/async-actions'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CircleFadingPlus } from 'lucide-react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ModalFormUI } from '../ui'
import { CreateModalStateBlock } from './create-modal-state-block'

export interface Props {
	className?: string
}

export const CreateStoryBlock: FC<Props> = () => {
	const { open, setOpen } = useOpenModal()
	const profile = useSelector((state: RootState) => state.auth.profile)

	const storiesActions = new StoriesActions()

	const {
		selectedImage,
		setSelectedImage,
		setImgUrl,
		onClickButtonSubmit,
		handleClose,
	} = useCreateModalImages({
		apiActions: storiesActions.createStory,
		setOpen,
		muddlewareName: 'story',
		successModalText: 'История успешно создана!',
		errorModalText: 'Ошибка при создании истории',
	})

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<button
					onClick={() => setOpen(true)}
					style={{
						width: '100%',
						position: 'relative',
						zIndex: 30,
					}}
				>
					<img
						src={
							profile.imageUrl
								? profile.imageUrl
								: 'https://lh4.googleusercontent.com/proxy/JUL2sr04ai9oOpfU9HTz2GbIN83QGc1gEc1895tqHl9253cFLtG3M7opUtHKYzMTZNoUTCSDerFNBBioPs1CG0rV_xY4jCYQA7Z__XzM3qojmvXZ3hG_Cfeu3oRI77gCfHvDeeMWPg'
						}
						alt='image-story'
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
							width: '100px',
							height: '150px',
							borderRadius: '7px',
						}}
					/>
					<CircleFadingPlus
						size={30}
						color='#ffffff'
						style={{ position: 'absolute', bottom: 13, right: '35%' }}
					/>
				</button>
				<Typography
					sx={{ fontSize: '13px', color: '#7e7e7e', marginTop: -0.3 }}
				>
					{profile.firstname}
				</Typography>
			</Box>
			<ModalFormUI
				width={500}
				open={open}
				buttonTextSubmit='Опубликовать'
				handleCloseModal={handleClose}
				onClickButtonSubmit={onClickButtonSubmit}
				weightTitle={500}
				alignTitle='left'
			>
				<CreateModalStateBlock
					selectedImage={selectedImage}
					setImgUrl={setImgUrl}
					setSelectedImage={setSelectedImage}
				/>
			</ModalFormUI>
		</>
	)
}
