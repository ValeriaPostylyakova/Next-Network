'use client'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	open: boolean
	handleClose: () => void
	buttonText: string
	width?: number
}

export const ModalUI: FC<Props> = ({
	children,
	open,
	buttonText,
	handleClose,
	width,
}) => {
	return (
		<Dialog
			sx={{
				'& .MuiDialog-paper': {
					borderRadius: '1rem',
					width: `${width}px`,
					bgcolor: '#000',
				},
			}}
			open={open}
			onClose={handleClose}
		>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button type='submit'>{buttonText}</Button>
			</DialogActions>
		</Dialog>
	)
}
