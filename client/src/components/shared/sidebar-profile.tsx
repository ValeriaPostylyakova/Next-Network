'use client'

import Box from '@mui/material/Box'

import { useSubmitFormData } from '@/hooks/use-submit-form-data'
import Link from 'next/link'
import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {
	className?: string
}

export const SidebarProfile: FC<Props> = () => {
	const { user } = useSubmitFormData()
	return (
		<Link href={`/profile/${user?.identifier}`}>
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
				{user && (
					<UserInfoName
						text={`@${user?.identifier}`}
						width={40}
						height={40}
						image='/user-profile.svg'
						sizeTitle={16}
						sizeSubTitle={14}
						name={user?.fullname}
					/>
				)}
			</Box>
		</Link>
	)
}
