import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { Ellipsis, MessageCircle } from 'lucide-react'
import { FC } from 'react'
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
			<Button>
				<Ellipsis size={30} />
			</Button>
		</Box>
	)
}
