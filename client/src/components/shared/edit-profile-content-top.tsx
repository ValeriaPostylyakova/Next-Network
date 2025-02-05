import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'
import { FlexContainer } from '../ui'
import { EditProfileModal } from './edit-profile-modal'
import { EditorProfileAvatar } from './editor-profile-avatar'

export interface Props {
	user: TProfile
}

export const EditProfileContentTop: FC<Props> = ({ user }) => {
	return (
		<>
			<FlexContainer mb='2rem' content='space-between'>
				<FlexContainer>
					<EditorProfileAvatar user={user} />
					<Box>
						<Typography>{user.firstname + ' ' + user.lastname}</Typography>
						<Typography sx={{ color: '#929292', mb: 2 }}>
							{user.jobTitle}
						</Typography>
						<Typography>@{user.identifier}</Typography>
					</Box>
				</FlexContainer>
				<EditProfileModal user={user} />
			</FlexContainer>
			<Divider />
		</>
	)
}
