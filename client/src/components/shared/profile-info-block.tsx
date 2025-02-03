import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'
import { ButtonUI } from '../ui'
import { UserInfoName } from './user-info-name'

export interface Props {
	profileInfo: TProfile | null
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
					image={
						profileInfo?.imageUrl
							? profileInfo?.imageUrl
							: '/images/user-profile.svg'
					}
					sizeTitle={20}
					sizeSubTitle={16}
					name={profileInfo?.firstname + ' ' + profileInfo?.lastname}
				/>
				<Link href={`/editProfile/${profileInfo?.id}`}>
					<ButtonUI variant='outlined'>Редактировать профиль</ButtonUI>
				</Link>
			</Box>
			<Divider />
		</>
	)
}
