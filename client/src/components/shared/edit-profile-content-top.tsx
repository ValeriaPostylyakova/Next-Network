import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'
import { FlexContainer } from '../ui'
import { EditProfileModal } from './edit-profile-modal'
import { EditorProfileAvatar } from './editor-profile-avatar'

export interface Props {
	profile: TProfile
}

export const EditProfileContentTop: FC<Props> = ({ profile }) => {
	return (
		<>
			<FlexContainer mb={4} content='space-between'>
				<FlexContainer>
					<EditorProfileAvatar width={100} height={100} profile={profile} />
					<Box>
						<Typography>
							{profile.firstname + ' ' + profile.lastname}
						</Typography>
						<Typography sx={{ color: '#929292', mb: 2 }}>
							{profile.jobTitle}
						</Typography>
						<Typography>@{profile.identifier}</Typography>
					</Box>
				</FlexContainer>
				<EditProfileModal profile={profile} />
			</FlexContainer>
			<Divider />
		</>
	)
}
