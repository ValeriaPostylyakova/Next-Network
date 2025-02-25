'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { MessageCircle, Trash2 } from 'lucide-react'
import { FC } from 'react'
import { MenuBlockButton } from './menu-block-button'
import { UserInfoName } from './user-info-name'

export interface Props {
	className?: string
}

export const FriendBlock: FC<Props> = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<UserInfoName
				width={80}
				height={80}
				image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
				sizeTitle={18}
				cursor='pointer'
				name='X_AE_A-13'
				messageBlock={
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							mt: 1,
							gap: '0.3rem',
						}}
					>
						<MessageCircle size={20} />
						<Typography sx={{ cursor: 'pointer' }}>
							Написать сообщение
						</Typography>
					</Box>
				}
			/>
			<MenuBlockButton
				handleClickItem={() => console.log('click')}
				icon={<Trash2 />}
				ml={-17}
				title='Удалить из друзей'
			/>
		</Box>
	)
}
