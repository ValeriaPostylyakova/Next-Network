'use client'

import useSocket from '@/hooks/use-socket'
import { ChatActions } from '@/redux/chats/async-actions'
import { MessagesActions } from '@/redux/messages/async-actions'
import { setMessages } from '@/redux/messages/slice'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileId } from '../../../constants/profile'
import { ChatFooter } from './chat-footer'
import { ChatHeader } from './chat-header'
import { ChatMessagesContainer } from './chat-messages-container'
export interface Props {
	id: string
}

const messagesActions = new MessagesActions()
const chatsActions = new ChatActions()

export const ChatContent: FC<Props> = ({ id }) => {
	const profile = useSelector((state: RootState) => state.auth.profile)
	const messages = useSelector((state: RootState) => state.messages.messages)
	const chatStatus = useSelector((state: RootState) => state.chats.statusChat)
	const chat = useSelector((state: RootState) => state.chats.chat)
	const dispatch: AppDispatch = useDispatch()
	const [value, setValue] = useState<string>('')
	const socket = useSocket('http://localhost:4200')

	useEffect(() => {
		dispatch(messagesActions.getMessages(id))
		dispatch(
			chatsActions.getChat({
				profileId: String(profileId),
				userId: id,
			})
		)

		socket?.on('new_message', data => {
			dispatch(setMessages(data))
		})

		return () => {
			if (socket) {
				socket.off('new_message')
				socket.disconnect()
			}
		}
	}, [socket, dispatch])

	const handleInputValue = async () => {
		const message = {
			text: value,
			sender: profileId,
			chatId: id,
		}

		socket?.emit('chat_message', message)

		setValue('')
	}

	return (
		<Box
			sx={{
				display: 'flex',
				height: '100vh',
				width: '100%',
				flexDirection: 'column',
			}}
		>
			{chatStatus === 'success' && <ChatHeader {...chat.chatUsers[0]} />}
			<ChatMessagesContainer messages={messages} profileId={profile.id} />

			<ChatFooter
				value={value}
				setValue={setValue}
				handleInputValue={handleInputValue}
			/>
		</Box>
	)
}
