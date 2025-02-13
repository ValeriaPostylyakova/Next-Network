import Box from '@mui/material/Box'
import { FC } from 'react'
import { TMessage } from '../../../@types/chat'
import { TProfile } from '../../../@types/profile'
import { Message } from './message'

export interface Props {
	profile: TProfile
	messages: TMessage[]
}

export const ChatBlockPage: FC<Props> = ({ profile, messages }) => {
	return (
		<Box
			sx={{
				width: '100%',
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
					message.sender === profile.email ? (
						<Message key={index} text={message.text} className='message sent' />
					) : (
						<Message
							key={index}
							text={message.text}
							className='message received'
						/>
					)
				)}
			</Box>
		</Box>
	)
}
