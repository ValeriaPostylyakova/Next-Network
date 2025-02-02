import { IProfile } from '@/redux/profile/types'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import { FC } from 'react'
import { ButtonUI } from '../ui'
import { UserInfoName } from './user-info-name'

export interface Props {
	profileInfo?: IProfile
}

export const ProfileInfoBlock: FC<Props> = ({ profileInfo }) => {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					pb: 1,
				}}
			>
				<UserInfoName
					text={profileInfo?.jobTitle}
					width={80}
					height={80}
					image='/images/user-profile.svg'
					sizeTitle={20}
					sizeSubTitle={16}
					name={profileInfo?.fullname}
				/>
				<Link href='/editProfile/:id'>
					<ButtonUI variant='outlined'>Редактировать профиль</ButtonUI>
				</Link>
			</Box>
			<Divider />
		</>
	)
}
