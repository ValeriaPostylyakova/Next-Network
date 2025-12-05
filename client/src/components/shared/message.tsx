'use client'

import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { MessagesActions } from '@/redux/messages/async-actions'
import { deleteMessage } from '@/redux/messages/slice'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import { unwrapResult } from '@reduxjs/toolkit'
import { Check, CheckCheck, X } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TMessage } from '../../../@types/chat'

export interface Props {
	message: TMessage
	className: string
	isRead?: boolean
}

const messagesActions = new MessagesActions()

export const Message: FC<Props> = ({ message, className, isRead }) => {
	const dispatch: AppDispatch = useDispatch()

	const onClickMessageDelete = async () => {
		try {
			const resultAction = await dispatch(
				messagesActions.deleteMessage(String(message.id))
			)
			unwrapResult(resultAction)
			dispatch(deleteMessage(message.id))
		} catch (error) {
			toast.error(
				'Ошибка при удалении сообщения. Пожалуйста, попробуйте ещё раз'
			)
			console.log(error)
		}
	}

	return (
		<>
			<Tooltip
				title={
					<Box
						onClick={onClickMessageDelete}
						sx={{
							display: 'flex',
							gap: '0.5rem',
							alignItems: 'center',
							cursor: 'pointer',
							height: '30px',
						}}
					>
						<X size={20} />
						<Typography fontSize={14}>Удалить сообщение</Typography>
					</Box>
				}
				disableFocusListener
				placement='bottom'
			>
				<Box
					className={className}
					style={{
						display: 'flex',
						gap: '0.5rem',
						cursor: 'pointer',
						alignItems: 'flex-end',
						height: 'auto',
					}}
				>
					<Typography
						sx={{
							fontSize: '17px',
							overflowWrap: 'break-word',
							overflowY: 'auto',
						}}
					>
						{message.text}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'flex-end',
							gap: '0.5rem',
						}}
					>
						<Typography
							sx={{
								fontSize: '13px',
								mt: 1,
								fontStyle: 'italic',
								justifyContent: 'flex-end',
							}}
						>
							{message.time}
						</Typography>
						{className === 'message sent' && (
							<>
								{message.isRead ? (
									<CheckCheck size={17} />
								) : (
									<Check size={17} />
								)}
							</>
						)}
					</Box>
				</Box>
			</Tooltip>
		</>
	)
}
