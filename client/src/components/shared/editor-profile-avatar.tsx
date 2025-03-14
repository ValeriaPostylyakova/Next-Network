'use client'

import { useCreateModalImages } from '@/hooks/use-create-modal-images'
import { useOpenModal } from '@/hooks/use-open-modal'
import { renderFileImage } from '@/libs/render-file-image'
import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
import { Box } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { unwrapResult } from '@reduxjs/toolkit'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { AvatarIsOnline, AvatarUI, ModalFormUI } from '../ui'
import { ListTooltipAndModal } from './list-tooltip-and-modal'

export interface Props {
	profile: TProfile
	width: number
}

const userActions = new FetchAuth()

export const EditorProfileAvatar: FC<Props> = ({ width, profile }) => {
	const { open, setOpen } = useOpenModal()
	const dispatch: AppDispatch = useDispatch()

	const {
		selectedImage,
		setSelectedImage,
		setImgUrl,
		onClickButtonSubmit,
		handleClose,
	} = useCreateModalImages({
		apiActions: userActions.updateProfileImageUrl,
		setOpen,
		muddlewareName: 'avatar',
		successModalText: 'Фотогарфия успешно обновлена',
		errorModalText: 'Ошибка при обновлении фотографии',
	})

	const deleteAvatar = async () => {
		try {
			const resultAction = await dispatch(userActions.deleteAvatar(profile.id))
			unwrapResult(resultAction)
			toast.success('Фотография успешно удалена')
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<>
			<Tooltip
				title={
					<ListTooltipAndModal
						onClickDelete={deleteAvatar}
						setOpen={setOpen}
						text='аватар'
					/>
				}
			>
				<span>
					{profile.isOnline === 'online' ? (
						<AvatarIsOnline
							image={profile.imageUrl}
							width={80}
							circleWidth={17}
							bottom={4}
						/>
					) : (
						<AvatarUI width={width} imageUrl={profile.imageUrl} />
					)}
				</span>
			</Tooltip>

			<ModalFormUI
				width={300}
				open={open}
				handleCloseModal={handleClose}
				onClickButtonSubmit={onClickButtonSubmit}
				buttonTextSubmit='Сохранить'
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '2rem',
						alignItems: 'center',
					}}
				>
					<input
						type='file'
						onChange={e => renderFileImage(e, setImgUrl, setSelectedImage)}
						name='avatar'
					/>
					{selectedImage !== null && (
						<img src={selectedImage} width={'100%'} height={200} alt='avatar' />
					)}
				</Box>
			</ModalFormUI>
		</>
	)
}
