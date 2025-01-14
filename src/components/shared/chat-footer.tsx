'use client'

import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { Paperclip, SendHorizontal, Smile } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const ChatFooter: FC<Props> = () => {
	return (
		<Box
			sx={[
				theme => ({
					position: 'absolute',
					bottom: '2%',
					left: '10%',
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
				<Smile />
				<TextField
					placeholder='Message'
					sx={{
						width: '90%',
						'& fieldset': { border: 'none' },
					}}
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
	)
}
