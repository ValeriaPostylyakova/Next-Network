import Avatar from '@mui/material/Avatar/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { OctagonX, Pen } from 'lucide-react'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'

export interface Props {
	user: TProfile
}

export const EditorProfileAvatar: FC<Props> = ({ user }) => {
	return (
		<Tooltip
			title={
				<ul>
					<li
						style={{
							padding: '10px 0',
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
							cursor: 'pointer',
							borderBottom: '1px solid #898989',
						}}
					>
						<Pen color='#898989' size={13} />
						<Typography fontSize={13}>Изменить аватар</Typography>
						<input type='file' />
					</li>
					<li
						style={{
							padding: '10px 0',
							display: 'flex',
							alignItems: 'center',
							gap: '1rem',
							cursor: 'pointer',
						}}
					>
						<OctagonX color='#898989' size={13} />
						<Typography fontSize={13}>Удалить аватар</Typography>
					</li>
				</ul>
			}
		>
			<Avatar
				alt='avatar'
				src={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
				sx={{
					width: 100,
					height: 100,
					cursor: 'pointer',
				}}
			/>
		</Tooltip>
	)
}
