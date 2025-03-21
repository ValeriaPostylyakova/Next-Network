'use client'

import useSocket from '@/hooks/use-socket'
import { ChatActions } from '@/redux/chats/async-actions'
import { setChat, setStatus } from '@/redux/chats/slice'
import { MessagesActions } from '@/redux/messages/async-actions'
import { setMessages, updateStateMessages } from '@/redux/messages/slice'
import { FetchAuth } from '@/redux/profile/async-actions'
import { setUser } from '@/redux/profile/auth-slice'
import { AppDispatch, RootState } from '@/redux/store'
import { deleteUnreadMessages } from '@/redux/unreadMessages/slice'
import Box from '@mui/material/Box'
import { unwrapResult } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'
import { FC, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { TChat, TMessage } from '../../../@types/chat'
import { Status } from '../../../@types/fetchStatus'
import { ChatHeaderSkeletonUI } from '../ui/chat-header-skeleton'
import { ChatFooter } from './chat-footer'
import { ChatHeader } from './chat-header'
import { ChatMessagesContainer } from './chat-messages-container'
export interface Props {
	id: string
}

const messagesActions = new MessagesActions()
const chatsActions = new ChatActions()

export const ChatContent: FC<Props> = ({ id }) => {
	const fetchAuth = new FetchAuth()
	const profile = useSelector((state: RootState) => state.auth.profile)
	const messages = useSelector((state: RootState) => state.messages.messages)
	const chatStatus = useSelector((state: RootState) => state.chats.statusChat)
	const chat = useSelector((state: RootState) => state.chats.chat)
	const dispatch: AppDispatch = useDispatch()
	const [value, setValue] = useState<string>('')
	const [statusTyping, setStatusTyping] = useState<string | null>(null)
	const socket = useSocket(`${process.env.API_URL}`)
	const router = useRouter()

	const chatId = chatStatus === 'success' ? String(chat.id) : id

	const loadChatData = useCallback(() => {
		async function getData() {
			try {
				const data = await dispatch(fetchAuth.checkAuth())
				const res = unwrapResult(data)
				dispatch(setUser(res.user))
				dispatch(messagesActions.getMessages(chatId))
				dispatch(
					chatsActions.getChat({
						chatId: chatId,
						profileId: String(res.user.id),
					})
				)
			} catch (e) {
				console.error(e)
			}
		}

		getData()
	}, [chatId, dispatch])

	useEffect(() => {
		if (!socket) return
		socket.emit('joinChat', profile.id)

		socket.on('resJoinChat', async (joinedProfileId: string) => {
			socket.emit('isReadMessage', chatId, joinedProfileId)
		})

		socket.on('resIsReadMessage', async (messagesReading: TMessage[]) => {
			dispatch(updateStateMessages(messagesReading))
			dispatch(deleteUnreadMessages(messagesReading))
		})

		return () => {
			socket.off('resJoinChat')
		}
	}, [socket, dispatch])

	useEffect(() => {
		loadChatData()
		return () => {
			dispatch(setChat({} as TChat))
			dispatch(setStatus(Status.LOADIND))
		}
	}, [dispatch])

	useEffect(() => {
		if (!socket) return

		const handleNewMessage = (data: TMessage) => {
			dispatch(setMessages(data))
		}

		const handleResTyping = (data: string | null) => {
			setStatusTyping(data)
		}

		socket.on('new_message', handleNewMessage)
		socket.on('resTyping', handleResTyping)

		return () => {
			socket.off('new_message')
			socket.off('resTyping')
			socket.off('resIsReadMessage')
			socket.off('resJoinChat')
		}
	}, [socket, chatId, dispatch])

	const handleInputValue = async (e: any) => {
		if (!socket || !chatId) return

		const message = {
			text: value,
			sender: String(profile.id),
			chatId: chatId,
		}

		socket.emit('typing', 'Печатает')

		if (e.code === 'Enter' || e.type === 'click') {
			socket.emit('typing', null)
			socket.emit('chat_message', message)
			setValue('')
		}
	}

	const deleteChat = async () => {
		try {
			const resultAction = await dispatch(chatsActions.deleteChat(chatId))
			unwrapResult(resultAction)
			toast.success('Чат успешно удален')
			router.push('/messages')
		} catch (e) {
			console.error(e)
			toast.error('Ошибка при удалении чата')
		}
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
			<>
				{chatStatus === 'loading' ? (
					<ChatHeaderSkeletonUI height='80px' />
				) : (
					<ChatHeader
						{...chat.chatUsers[0]}
						status={statusTyping}
						deleteChat={deleteChat}
					/>
				)}
			</>
			<ChatMessagesContainer messages={messages} profileId={profile.id} />

			<ChatFooter
				value={value}
				setValue={setValue}
				handleInputValue={handleInputValue}
			/>
		</Box>
	)
}
