'use client'

import { ChatFooter, ChatHeader, Message } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC, useState } from 'react'

interface Props {}

export type TMessages = {
	sender: string
	text: string
}

const Page: FC<Props> = () => {
	const [messages, setMessages] = useState<TMessages[]>([])

	return (
		<MainWrapper mt={0}>
			<ChatHeader />
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
		</MainWrapper>
	)
}

export default Page
