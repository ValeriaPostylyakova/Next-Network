'use client'

import { ChatActions } from '@/redux/chats/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProgressSkeletonUI } from '../ui/circle-skeleton'
import { BlockEmpty } from './block-empty'
import { ChatBlock } from './chat-block'

export const MessagesPageContent: FC = () => {
	const chatsActions = new ChatActions()
	const dispatch: AppDispatch = useDispatch()
	const chats = useSelector((state: RootState) => state.chats.chats)
	const status = useSelector((state: RootState) => state.chats.statusChats)
	const profile = useSelector((state: RootState) => state.auth.profile)

	useEffect(() => {
		dispatch(chatsActions.getChats(profile.id))
	}, [])

	return (
		<>
			{status === 'loading' ? (
				<ProgressSkeletonUI />
			) : chats.length > 0 ? (
				<Box sx={{ width: '100%', m: '0 auto' }}>
					{chats.map(chat => (
						<ChatBlock
							key={chat.id}
							chatId={chat.id}
							{...chat.chatUsers[0]}
							unreadMessagesCount={chat.unreadMessage.length}
							lastMessage={chat.messages.at(-1)}
						/>
					))}
				</Box>
			) : (
				<Box
					sx={{
						display: 'grid',
						height: '100vh',
						placeItems: 'center',
					}}
				>
					<BlockEmpty imageName='/posts-empty.svg' text='Список чатов пуст' />
				</Box>
			)}
		</>
	)
}
