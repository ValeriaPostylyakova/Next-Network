'use client'

import { useOpenModal } from '@/hooks/use-open-modal'
import useSocket from '@/hooks/use-socket'
import Box from '@mui/material/Box'
import { FC, useRef } from 'react'
import { useClickAway } from 'react-use'
import { TMessage } from '../../../@types/chat'
import { BlockEmpty } from './block-empty'
import { Message } from './message'

export interface Props {
	profileId: number
	messages: TMessage[]
}

export const ChatMessagesContainer: FC<Props> = ({ profileId, messages }) => {
	const { setOpen } = useOpenModal()
	const socket = useSocket('http://localhost:4200')

	const ref = useRef(null)

	useClickAway(ref, () => {
		setOpen(false)
	})

	return (
		<Box
			ref={ref}
			sx={{
				width: '100%',
				height: '92vh',
				overflowY: 'auto',
				scrollbarWidth: 'thin',
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					padding: '10px',
					width: '50%',
					m: '0 auto',
					mt: 12,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{messages.length > 0 ? (
					<>
						{messages?.map((message: TMessage, index: number) =>
							message.sender == String(profileId) ? (
								<Message
									key={index}
									message={message}
									className='message sent'
								/>
							) : (
								<Message
									key={index}
									message={message}
									className='message received'
								/>
							)
						)}
					</>
				) : (
					<BlockEmpty
						imageName='/posts-empty.svg'
						text='Список сообщений пуст. Напишите первым, чтобы начать общение!'
					/>
				)}
			</Box>
		</Box>
	)
}
