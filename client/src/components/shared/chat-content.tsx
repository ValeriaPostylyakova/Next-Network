'use client'

import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Socket, io } from 'socket.io-client'
import { TMessage } from '../../../@types/chat'
import { ChatFooter } from './chat-footer'
import { ChatHeader } from './chat-header'
import { Message } from './message'
export interface Props {
	id: string
}

export const ChatContent: FC<Props> = ({ id }) => {
	const user = useSelector((state: RootState) => state.user.profile)
	const profile = useSelector((state: RootState) => state.auth.user)
	const dispatch: AppDispatch = useDispatch()
	const profileActions = new UserActions()
	const [messageArray, setMessageArray] = useState<TMessage[]>([])
	const [socket, setSocket] = useState<Socket | null>(null)

	const [value, setValue] = useState<string>('')

	useEffect(() => {
		dispatch(profileActions.getUser(id))
		localStorage.setItem('userId', profile.id.toString())
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
	}, [messageArray])

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

			<Box
				sx={{
					flexGrow: 1,
					overflowY: 'auto',
					padding: '10px',
					width: '50%',
					m: '0 auto',
					mt: 12,
					display: 'flex',
					flexDirection: 'column',
					scrollbarWidth: 'thin',
				}}
			>
				{messageArray?.map((message: any, index: number) => (
					<Message
						key={index}
						text={message.text}
						className={
							Number(localStorage.getItem('userId')) === message.userId.id
								? 'message sent'
								: 'message received'
						}
					/>
				))}
			</Box>

			<ChatFooter
				value={value}
				setValue={setValue}
				handleInputValue={handleInputValue}
			/>
		</Box>
	)
}
