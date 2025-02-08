'use client'

import { DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import { FC, FormEvent, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	open: boolean
	width?: number
	buttonTextSubmit: string
	handleCloseModal?: () => void
	onClickButtonSubmit: (e: FormEvent<HTMLFormElement>) => void
	titleText?: string
}

export const ModalFormUI: FC<Props> = ({
	children,
	open,
	buttonTextSubmit,
	onClickButtonSubmit,
	handleCloseModal,
	width,
	titleText,
}) => {
	return (
		<Dialog
			sx={{
				'& .MuiDialog-paper': {
					borderRadius: '1rem',
					width: `${width}px`,
				},
			}}
			open={open}
			onClose={handleCloseModal}
		>
			<form onSubmit={e => onClickButtonSubmit(e)}>
				{titleText && <DialogTitle>{titleText}</DialogTitle>}
				<DialogContent>{children}</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseModal}>Отмена</Button>
					<Button type='submit'>{buttonTextSubmit}</Button>
				</DialogActions>
			</form>
		</Dialog>
	)
}
