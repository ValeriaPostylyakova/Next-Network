'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { renderFileImage } from '@/libs/render-file-image'
import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { OctagonX, Pen } from 'lucide-react'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'
import { ModalFormUI } from '../ui'

export interface Props {
	profile: TProfile
	width: number
	height: number
}

export const EditorProfileAvatar: FC<Props> = ({ width, height, profile }) => {
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
					<ul>
						<li
							onClick={() => setOpen(true)}
							style={{
								padding: '10px 0',
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								cursor: 'pointer',
								borderBottom: '1px solid #898989',
							}}
						>
							<Pen color='#898989' size={13} />
							<Typography fontSize={13}>Изменить аватар</Typography>
						</li>
						<li
							style={{
								padding: '10px 0',
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								cursor: 'pointer',
							}}
							onClick={deleteAvatar}
						>
							<OctagonX color='#898989' size={13} />
							<Typography fontSize={13}>Удалить аватар</Typography>
						</li>
					</ul>
				}
			>
				<Avatar
					alt='avatar'
					src={profile.imageUrl ? profile.imageUrl : '/images/user-profile.svg'}
					sx={{
						width: width,
						height: height,
						cursor: 'pointer',
					}}
				/>
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
