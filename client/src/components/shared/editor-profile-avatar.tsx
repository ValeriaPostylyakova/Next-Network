'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import { AppDispatch } from '@/redux/store'
import { setUserImageUrl } from '@/redux/user/auth-slice'
import { Button, DialogContent } from '@mui/material'
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
	const dispatch: AppDispatch = useDispatch()

	const [image, setImage] = useState<File | undefined>()

	function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0]
		setImage(file)

		if (file) {
			const reader = new FileReader()
			reader.onload = e => {
				dispatch(setUserImageUrl(e.target?.result as string))
			}
			reader.readAsDataURL(file)
		}

		handleClose()
		toast.success('Изменения успешно сохранены')
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement> | undefined) => {
		e?.preventDefault()
		const formData = new FormData()
		formData.append('imageUrl', image)
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
					<DialogContent>
						<input
							type='file'
							accept='image/*'
							onChange={handleImageChange}
							style={{
								marginBottom: '2rem',
							}}
						/>
						<Button
							size='small'
							onClick={handleClose}
							sx={{
								display: 'block',
								borderRadius: '0.6rem',
								marginLeft: 'auto',
							}}
							variant='outlined'
						>
							Отмена
						</Button>
						<Button
							size='small'
							type='submit'
							sx={{
								display: 'block',
								borderRadius: '0.6rem',
								marginLeft: 'auto',
							}}
							variant='outlined'
						>
							Сохранить
						</Button>
					</DialogContent>
				</form>
			</Dialog>
		</>
	)
}
