import { Box, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { TMessage } from '../../../@types/chat'
import { TProfile } from '../../../@types/profile'
import { AvatarIsOnline, AvatarUI, BadgeUI } from '../ui'

export interface Props {
	lastMessage?: TMessage
	user: TProfile
	unreadMessagesCount: number
	chatId: number
}

export const ChatBlock: FC<Props> = ({
	user,
	lastMessage,
	chatId,
	unreadMessagesCount,
}) => {
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
					{user.isOnline === 'online' ? (
						<AvatarIsOnline
							bottom={2}
							width={70}
							circleWidth={14}
							image={user.imageUrl}
						/>
					) : (
						<AvatarUI width={70} imageUrl={user.imageUrl} />
					)}

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
							{lastMessage?.text && lastMessage?.text.length > 30
								? lastMessage?.text.slice(0, 30) + '...'
								: lastMessage?.text}
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
						alignItems: 'center',
						mb: 2.5,
					}}
				>
					<Typography fontSize={14}>{lastMessage?.time}</Typography>
					{unreadMessagesCount > 0 && (
						<BadgeUI count={unreadMessagesCount} fontSize={20} width={30} />
					)}
				</Box>
			</Box>
			<Divider />
		</Link>
	)
}
