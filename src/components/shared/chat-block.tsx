import { Box, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {
	className?: string
}

export const ChatBlock: FC<Props> = () => {
	const id = 1
	return (
		<Link href={`/chat/${id}`}>
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
				<Box>
					<UserInfoName
						height={40}
						width={40}
						image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
						sizeTitle={16}
					/>
					<Typography>Lorem ipsum dolor, sit amet</Typography>
				</Box>
				<Typography>16:55</Typography>
			</Box>
			<Divider />
		</Link>
	)
}
