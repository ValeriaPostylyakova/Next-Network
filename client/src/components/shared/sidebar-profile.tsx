'use client'

import Box from '@mui/material/Box'

import { RootState } from '@/redux/store'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { UserInfoName } from './user-info-name'

export interface Props {
	className?: string
}

export const SidebarProfile: FC<Props> = () => {
	const user = useSelector((state: RootState) => state.authRegister)
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
					image='/user-profile.svg'
					sizeTitle={16}
					sizeSubTitle={14}
					name={user.user?.fullname}
				/>
			</Box>
		</Link>
	)
}
