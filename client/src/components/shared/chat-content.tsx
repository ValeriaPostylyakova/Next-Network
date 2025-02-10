'use client'

import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import { FC, KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatFooter } from './chat-footer'
import { ChatHeader } from './chat-header'
import { Message } from './message'

export interface Props {
	id: string
}

export type TMessage = {
	text: string
	resend: string
}

export const ChatContent: FC<Props> = ({ id }) => {
	const profile = useSelector((state: RootState) => state.user.profile)
	const dispatch: AppDispatch = useDispatch()
	const profileActions = new UserActions()
	const [messageArray, setMessageArray] = useState<TMessage[]>([])

	const [value, setValue] = useState<string>('')

	const handleInputValue = (e: KeyboardEvent) => {
		if (e.code === 'Enter' || e.type === 'click') {
			setMessageArray([
				...messageArray,
				{
					text: value,
					resend: 'me',
				},
			])

			setValue('')
		}
	}

	useEffect(() => {
		dispatch(profileActions.getUser(id))
	}, [])

	return (
		<Box
			sx={{
				display: 'flex',
				height: '100vh',
				width: '100%',
				flexDirection: 'column',
			}}
		>
			<ChatHeader user={profile} />
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
				{messageArray.map((message: TMessage, index: number) => (
					<Message
						key={index}
						text={message.text}
						className={
							message.resend === 'me' ? 'message sent' : 'message received'
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
