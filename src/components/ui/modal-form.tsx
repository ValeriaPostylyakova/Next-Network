import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material'
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
