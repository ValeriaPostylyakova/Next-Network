'use client'

import { useCreateModalImages } from '@/hooks/use-create-modal-images'
import { useOpenModal } from '@/hooks/use-open-modal'
import { PostActions } from '@/redux/post/async-action'
import { RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { ALargeSmall, CircleFadingPlus } from 'lucide-react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ModalUI } from '../ui'
import { CreateModalStateBlock } from './create-modal-state-block'

export interface Props {
	className?: string
}

export const CreateStoryBlock: FC<Props> = () => {
	const { open, setOpen, handleClose: handleCloseModal } = useOpenModal()
	const profile = useSelector((state: RootState) => state.auth.profile)

	const postActions = new PostActions()

	const {
		selectedImage,
		setSelectedImage,
		setImgUrl,
		onClickButtonSubmit,
		handleClose,
	} = useCreateModalImages({
		apiActions: postActions,
		setOpen,
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
			<ModalUI
				width={600}
				open={open}
				buttonText='Опубликовать'
				handleClose={handleCloseModal}
			>
				<Box
					sx={{
						display: 'flex',
					}}
				>
					<div>
						<CreateModalStateBlock
							selectedImage={selectedImage}
							setImgUrl={setImgUrl}
							setSelectedImage={setSelectedImage}
						/>
					</div>

					<List>
						<ListItemButton disabled={selectedImage === null}>
							<ListItemIcon>
								<ALargeSmall />
							</ListItemIcon>
							<ListItemText primary='Текст' />
						</ListItemButton>
					</List>
				</Box>
			</ModalUI>
		</>
	)
}
