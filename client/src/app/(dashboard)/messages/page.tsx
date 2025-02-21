'use client'

import { BlockEmpty, ChatBlock } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import { ChatActions } from '@/redux/chats/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileId } from '../../../../constants/profile'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	const chatsActions = new ChatActions()
	const dispatch: AppDispatch = useDispatch()
	const chats = useSelector((state: RootState) => state.chats.chats)

	useEffect(() => {
		dispatch(chatsActions.getChats(profileId))
	}, [])

	return (
		<MainWrapper mt={0}>
			{chats.length > 0 ? (
				<Box sx={{ width: '100%', m: '0 auto' }}>
					{chats.map(chat => (
						<ChatBlock
							key={chat.id}
							chatId={chat.id}
							{...chat.chatUsers[0]}
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
		</MainWrapper>
	)
}

export default Page
