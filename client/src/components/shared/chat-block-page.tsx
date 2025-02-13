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
			{messages?.map((message: TMessage, index: number) => (
				<Message
					key={index}
					text={message.text}
					className={
						localStorage.getItem('userEmail') !== undefined
							? 'message sent'
							: 'message received'
					}
				/>
			))}
		</Box>
	)
}
