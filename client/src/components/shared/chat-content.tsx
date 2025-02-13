'use client'

import { MessagesActions } from '@/redux/messages/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
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
	const user = useSelector((state: RootState) => state.user.profile)
	const profile = useSelector((state: RootState) => state.auth.user)

	const messages = useSelector((state: RootState) => state.messages.messages)

	const dispatch: AppDispatch = useDispatch()

	const profileActions = new UserActions()
	const messagesActions = new MessagesActions()
	const [messageArray, setMessageArray] = useState<TMessage[]>([])
	const [socket, setSocket] = useState<Socket | null>(null)

	const [value, setValue] = useState<string>('')

	useEffect(() => {
		dispatch(profileActions.getUser(id))
		dispatch(messagesActions.getMessages(id))
		localStorage.setItem('email', profile.email)
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
			<ChatHeader user={user} />

			<ChatBlockPage messages={messages} profile={profile} />

			<ChatFooter
				value={value}
				setValue={setValue}
				handleInputValue={handleInputValue}
			/>
		</Box>
	)
}
