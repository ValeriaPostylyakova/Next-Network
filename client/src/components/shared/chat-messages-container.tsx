import Box from '@mui/material/Box'
import { FC } from 'react'
import { TMessage } from '../../../@types/chat'
import { Message } from './message'

export interface Props {
	profileId: number
	messages: TMessage[]
}

export const ChatMessagesContainer: FC<Props> = ({ profileId, messages }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '92vh',
				overflowY: 'auto',
				scrollbarWidth: 'thin',
			}}
		>
			<Box
				sx={{
					flexGrow: 1,
					padding: '10px',
					width: '50%',
					m: '0 auto',
					mt: 12,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{messages?.map((message: TMessage, index: number) =>
					message.sender == String(profileId) ? (
						<Message
							key={index}
							text={message.text}
							time={message.time}
							className='message sent'
						/>
					) : (
						<Message
							key={index}
							text={message.text}
							time={message.time}
							className='message received'
						/>
					)
				)}
			</Box>
		</Box>
	)
}
