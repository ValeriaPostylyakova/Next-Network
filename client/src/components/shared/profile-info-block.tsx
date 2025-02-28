import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { FC, ReactNode } from 'react'
import { TProfile } from '../../../@types/profile'
import { AvatarUI, FlexContainer } from '../ui'
import { EditorProfileAvatar } from './editor-profile-avatar'

export interface Props {
	profileInfo: TProfile
	children?: ReactNode
	tooltipOpen: boolean
}

export const ProfileInfoBlock: FC<Props> = ({
	profileInfo,
	children,
	tooltipOpen,
}) => {
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
					{tooltipOpen ? (
						<EditorProfileAvatar width={80} profile={profileInfo} />
					) : (
						<AvatarUI width={80} imageUrl={profileInfo.imageUrl} />
					)}
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
						<Typography
							sx={{
								mt: 1,
								color: '#8b8b8b',
							}}
						>
							{profileInfo.isOnline}
						</Typography>
					</Box>
				</FlexContainer>
				{children}
			</Box>
			<Divider />
		</>
	)
}
