'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { renderFileImage } from '@/libs/render-file-image'
import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
import { Box } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { AvatarIsOnline, AvatarUI, ModalFormUI } from '../ui'
import { ListTooltipAndModal } from './list-tooltip-and-modal'

export interface Props {
	profile: TProfile
	width: number
}

export const EditorProfileAvatar: FC<Props> = ({ width, profile }) => {
	const [image, setImage] = useState<any | null>(null)
	const [selectedImages, setSelectedImages] = useState<any | null>(null)

	const { open, setOpen, handleClose } = useOpenModal()
	const userActions = new FetchAuth()
	const dispatch: AppDispatch = useDispatch()

	const handleSubmit = async (e: FormEvent<HTMLFormElement> | undefined) => {
		e?.preventDefault()
		try {
			const formData = new FormData()
			formData.append('avatar', image)
			await dispatch(userActions.updateProfileImageUrl(formData)).then(() => {
				handleClose()
				toast.success('Фотография успешно обновлена')
			})
		} catch (e) {
			console.error(e)
		}
	}

	const onClickClose = () => {
		setSelectedImages(null)
		handleClose()
	}

	const deleteAvatar = async () => {
		try {
			await dispatch(userActions.deleteAvatar(profile.id)).then(() => {
				toast.success('Фотография успешно удалена')
			})
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
				handleCloseModal={onClickClose}
				onClickButtonSubmit={handleSubmit}
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
						onChange={e => renderFileImage(e, setImage, setSelectedImages)}
						name='avatar'
					/>
					{selectedImages !== null && (
						<img
							src={selectedImages}
							width={'100%'}
							height={200}
							alt='avatar'
						/>
					)}
				</Box>
			</ModalFormUI>
		</>
	)
}
