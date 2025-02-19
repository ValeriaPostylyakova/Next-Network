import { Avatar, Box, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { TMessage } from '../../../@types/chat'
import { TProfile } from '../../../@types/profile'

export interface Props {
	lastMessage?: TMessage
	user: TProfile
	chatId: number
}

export const ChatBlock: FC<Props> = ({ user, lastMessage, chatId }) => {
	return (
		<Link href={`/chat/${chatId}`}>
			<Box
				sx={{
					width: '97%',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					background: 'background.default',
					py: 2,
					cursor: 'pointer',
				}}
			>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					<Avatar
						alt='avatar'
						src={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
						sx={{
							width: 70,
							height: 70,
						}}
					/>

					<Box
						sx={{
							display: 'flex',
							height: '100%',
							flexDirection: 'column',
							gap: '0.4rem',
						}}
					>
						<Typography sx={{ fontSize: `20px`, fontWeight: 600 }}>
							{user.firstname + ' ' + user.lastname}
						</Typography>
						<Typography
							sx={{
								fontSize: `17px`,
								fontWeight: 500,
								color: '#b5b5b5',
							}}
						>
							{lastMessage?.text}
						</Typography>
					</Box>
				</Box>
				<Typography>{lastMessage?.time}</Typography>
			</Box>
			<Divider />
		</Link>
	)
}
