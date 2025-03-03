'use client'

import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { MessagesActions } from '@/redux/messages/async-actions'
import { deleteMessage } from '@/redux/messages/slice'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import { Check } from 'lucide-react'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { TMessage } from '../../../@types/chat'
import { ListTooltipAndModal } from './list-tooltip-and-modal'

export interface Props {
	message: TMessage
	className: string
}

const messagesActions = new MessagesActions()

export const Message: FC<Props> = ({ message, className }) => {
	const [isRead, setIsRead] = useState(message.isRead)

	const dispatch: AppDispatch = useDispatch()

	const onClickMessageDelete = async () => {
		console.log(message.sender)
		try {
			await dispatch(messagesActions.deleteMessage(String(message.id)))
			dispatch(deleteMessage(message.id))
			toast.success('Сообщение успешно удалено')
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
					<ListTooltipAndModal
						onClickDelete={onClickMessageDelete}
						text='сообщение'
					/>
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
						flexGrow: 0,
						alignItems: 'flex-end',
					}}
				>
					<Typography
						sx={{
							fontSize: '17px',
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
						<Check size={17} />
						{/* <CheckCheck size={17} /> */}
					</Box>
				</Box>
			</Tooltip>
		</>
	)
}
