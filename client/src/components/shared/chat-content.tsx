'use client'

import { TMessages } from '@/app/(dashboard)/chat/[id]/page'
import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatFooter } from './chat-footer'
import { ChatHeader } from './chat-header'
import { Message } from './message'

export interface Props {
	id: string
}

export const ChatContent: FC<Props> = ({ id }) => {
	const [messages, setMessages] = useState<TMessages[]>([])
	const profile = useSelector((state: RootState) => state.user.profile)
	const dispatch: AppDispatch = useDispatch()
	const profileActions = new UserActions()

	useEffect(() => {
		dispatch(profileActions.getUser(id))
	}, [])

	return (
		<>
			<ChatHeader user={profile} />
			<Box
				sx={{
					position: 'absolute',
					bottom: '10%',
					left: '8%',
					width: '77%',
					m: '0 auto',
					display: 'flex',
					gap: 0.8,
					flex: 1,
					flexDirection: 'column',
				}}
			>
				{messages.map((message, index) => (
					<Message key={index} text={message.text} align={message.sender} />
				))}
			</Box>
			<ChatFooter messages={messages} setMessages={setMessages} />
		</>
	)
}
