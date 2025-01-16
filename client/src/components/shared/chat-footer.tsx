'use client'

import { TMessages } from '@/app/(dashboard)/chat/[id]/page'
import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { Paperclip, SendHorizontal, Smile } from 'lucide-react'

import EmojiPicker from 'emoji-picker-react'
import { FC, useState } from 'react'

export interface Props {
	messages: TMessages[]
	setMessages: (value: TMessages[]) => void
}

export const ChatFooter: FC<Props> = ({ messages, setMessages }) => {
	const [smileOpen, setSmileOpen] = useState<boolean>(false)
	const [value, setValue] = useState<string>('')

	const handleInputValue = (e: any) => {
		if (e.code === 'Enter') {
			const obj: TMessages = {
				sender: 'right',
				text: e.target.value,
			}
			setMessages([...messages, obj])
			setValue('')
		}
	}

	const handleClickEmoji = (emoji: string) => {
		setValue(prev => prev + emoji)
		setSmileOpen(false)
	}

	return (
		<Box>
			{smileOpen && (
				<Box
					sx={{ position: 'absolute', left: '7%', bottom: '9%', zIndex: 100 }}
				>
					<EmojiPicker onEmojiClick={e => handleClickEmoji(e.emoji)} />
				</Box>
			)}
			<Box
				sx={[
					theme => ({
						position: 'absolute',
						bottom: '2%',
						left: '7%',
						zIndex: 100,
						width: '80%',
						m: '0 auto',
						bgcolor: '#101010',
						borderRadius: '10px 10px 0px 10px',
					}),
					theme =>
						theme.applyStyles('light', {
							backgroundColor: '#eee',
						}),
					theme =>
						theme.applyStyles('dark', {
							backgroundColor: '#272727',
						}),
				]}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						px: 2,
					}}
				>
					<Button onClick={() => setSmileOpen(!smileOpen)}>
						<Smile />
					</Button>
					<TextField
						placeholder='Message'
						sx={{
							width: '90%',
							'& fieldset': { border: 'none' },
						}}
						value={value}
						onKeyDown={handleInputValue}
						onChange={e => setValue(e.target.value)}
					/>
					<Paperclip />
				</Box>
				<Button
					sx={{
						position: 'absolute',
						bottom: '10%',
						right: '-8%',
						color: theme => theme.palette.text.primary,
						width: '50px',
						height: '50px',
						borderRadius: '50%',
						bgcolor: '#2d7196',
					}}
				>
					<SendHorizontal />
				</Button>
			</Box>
		</Box>
	)
}
