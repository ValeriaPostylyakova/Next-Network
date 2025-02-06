import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'
import { ButtonUI, FlexContainer } from '../ui'
import { EditorProfileAvatar } from './editor-profile-avatar'

export interface Props {
	profileInfo: TProfile
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
				<FlexContainer>
					<EditorProfileAvatar width={80} height={80} user={profileInfo} />
					<Box
						sx={{
							display: 'flex',
							alignItems: 'start',
							flexDirection: 'column',
						}}
					>
						<Typography sx={{ fontSize: `20px`, fontWeight: 600 }}>
							{profileInfo.firstname + ' ' + profileInfo.lastname}
						</Typography>

						<Typography
							sx={{
								fontSize: `16px`,
								fontWeight: 500,
								color: '#b5b5b5',
							}}
						>
							{profileInfo.jobTitle}
						</Typography>
					</Box>
				</FlexContainer>
				<Link href={`/editProfile`}>
					<ButtonUI variant='outlined'>Редактировать профиль</ButtonUI>
				</Link>
			</Box>
			<Divider />
		</>
	)
}
