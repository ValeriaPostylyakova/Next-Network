import Box from '@mui/material/Box'

import { FC } from 'react'
import { UserInfoName } from './user-info-name'
import Link from 'next/link'

export interface Props {
	className?: string
}

export const SidebarProfile: FC<Props> = () => {
	return (
		<Link href='/profile'>
			<Box
				sx={{
					position: 'absolute',
					zIndex: 20,
					bottom: '0px',
					left: '20px',
					height: '100px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
				}}
			>
				<UserInfoName
					text='@valera'
					width={40}
					height={40}
					image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
					sizeTitle={16}
					sizeSubTitle={14}
				/>
			</Box>
		</Link>
	)
}
