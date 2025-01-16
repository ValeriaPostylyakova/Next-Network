import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	open: boolean
	handleClose: () => void
	buttonText: string
	dialogTitle: string
}

export const ModalFormUI: FC<Props> = ({
	children,
	open,
	buttonText,
	dialogTitle,
	handleClose,
}) => {
	return (
		<Dialog
			sx={{
				borderRadius: '1rem',
			}}
			open={open}
			onClose={handleClose}
		>
			<DialogTitle>{dialogTitle}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Отмена</Button>
				<Button type='submit'>{buttonText}</Button>
			</DialogActions>
		</Dialog>
	)
}
