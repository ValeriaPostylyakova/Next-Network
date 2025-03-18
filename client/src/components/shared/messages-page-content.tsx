'use client'

import { ChatActions } from '@/redux/chats/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BlockEmpty } from './block-empty'
import { ChatBlock } from './chat-block'

const chatsActions = new ChatActions()
const dispatch: AppDispatch = useDispatch()
const chats = useSelector((state: RootState) => state.chats.chats)

export const MessagesPageContent: FC = () => {
	useEffect(() => {
		dispatch(chatsActions.getChats())
	}, [])

	return (
		<>
			{chats.length > 0 ? (
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
