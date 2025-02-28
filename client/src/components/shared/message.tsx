'use client'

import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { MessagesActions } from '@/redux/messages/async-actions'
import { deleteMessage } from '@/redux/messages/slice'
import { AppDispatch } from '@/redux/store'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { TMessage } from '../../../@types/chat'
import { ListTooltipAndModal } from './list-tooltip-and-modal'

export interface Props {
	id: number
	text: string
	className: string
	time: string
	messages: TMessage[]
}

const messagesActions = new MessagesActions()

export const Message: FC<Props> = ({ id, text, className, time, messages }) => {
	const dispatch: AppDispatch = useDispatch()
	const onClickMessageDelete = async () => {
		const message = messages.find(message => message.id === id)
		if (message) {
			dispatch(messagesActions.deleteMessage(String(message.id)))
			dispatch(deleteMessage(message.id))
		}
	}

	return (
		<>
			<Tooltip
				sx={{}}
				title={
					<ListTooltipAndModal
						onClickDelete={onClickMessageDelete}
						text='сообщение'
					/>
				}
				disableFocusListener
				placement='bottom'
			>
				<div
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
						{text}
					</Typography>
					<Typography
						sx={{
							fontSize: '13px',
							mt: 1,
							fontStyle: 'italic',
							justifyContent: 'flex-end',
						}}
					>
						{time}
					</Typography>
				</div>
			</Tooltip>
		</>
	)
}
function useAppDispatch() {
	throw new Error('Function not implemented.')
}
