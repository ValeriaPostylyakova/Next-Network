'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { AppDispatch } from '@/redux/store'
import { FetchAuth } from '@/redux/user/async-actions'
import { Button, DialogActions, DialogContent } from '@mui/material'
import Avatar from '@mui/material/Avatar/Avatar'
import Dialog from '@mui/material/Dialog/Dialog'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { OctagonX, Pen } from 'lucide-react'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TProfile } from '../../../@types/profile'

export interface Props {
	user: TProfile
	width: number
	height: number
}

export const EditorProfileAvatar: FC<Props> = ({ user, width, height }) => {
	const { open, setOpen, handleClose } = useOpenModal()
	const userActions = new FetchAuth()
	const dispatch: AppDispatch = useDispatch()

	const [image, setImage] = useState<any | undefined>()
	const [selectedImages, setSelectedImages] = useState<any | null>(null)

	function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0]
		setImage(file)

		if (file) {
			const reader = new FileReader()
			reader.onload = e => {
				setSelectedImages(e.target?.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

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
			await dispatch(userActions.deleteAvatar(user.id)).then(() => {
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
					src={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
					sx={{
						width: width,
						height: height,
						cursor: 'pointer',
					}}
				/>
			</Tooltip>

			<Dialog open={open}>
				<form onSubmit={e => handleSubmit(e)}>
					<DialogContent
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: '2rem',
							alignItems: 'center',
						}}
					>
						<input type='file' onChange={handleImageChange} name='avatar' />
						{selectedImages !== null && (
							<img
								src={selectedImages}
								width={'100%'}
								height={200}
								alt='avatar'
							/>
						)}
					</DialogContent>
					<DialogActions>
						<Button size='small' onClick={onClickClose} variant='outlined'>
							Отмена
						</Button>
						<Button size='small' type='submit' variant='outlined'>
							Сохранить
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}
