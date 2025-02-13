'use client'

import { ChatActions } from '@/redux/chats/async-actions'
import { MessagesActions } from '@/redux/messages/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Socket, io } from 'socket.io-client'
import { TMessage } from '../../../@types/chat'
import { ChatBlockPage } from './chat-block-page'
import { ChatFooter } from './chat-footer'
import { ChatHeader } from './chat-header'
export interface Props {
	id: string
}

export const ChatContent: FC<Props> = ({ id }) => {
	const profile = useSelector((state: RootState) => state.auth.user)
	const messages = useSelector((state: RootState) => state.messages.messages)
	const chat = useSelector((state: RootState) => state.chats.chat)

	const dispatch: AppDispatch = useDispatch()

	const messagesActions = new MessagesActions()
	const chatsActions = new ChatActions()
	const chatStatus = useSelector((state: RootState) => state.chats.statusChat)
	const [messageArray, setMessageArray] = useState<TMessage[]>([])
	const [socket, setSocket] = useState<Socket | null>(null)

	const [value, setValue] = useState<string>('')

	useEffect(() => {
		dispatch(messagesActions.getMessages(id))
		dispatch(
			chatsActions.getChat({
				chatId: id,
				userId: localStorage.getItem('userId') as string,
			})
		)
		const newSocket = io('http://localhost:4200')
		setSocket(newSocket)

		newSocket.on('response', data => {
			console.log(data)
			setMessageArray(prev => [...prev, data])
		})

		// return () => {
		// 	if (newSocket) {
		// 		newSocket.off('response')
		// 		newSocket.disconnect()
		// 	}
		// }
	}, [])

	const handleInputValue = () => {
		socket?.emit('chat_message', {
			id: socket.id,
			text: value,
			userId: profile.id,
		})

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
			{chatStatus === 'success' && <ChatHeader user={chat.users[0]} />}
			<ChatBlockPage messages={messages} profile={profile} />

			<ChatFooter
				value={value}
				setValue={setValue}
				handleInputValue={handleInputValue}
			/>
		</Box>
	)
}
