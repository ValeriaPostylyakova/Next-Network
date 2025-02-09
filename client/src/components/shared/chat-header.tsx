import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'
import { UserInfoName } from './user-info-name'

export interface Props {
	user: TProfile
}

export const ChatHeader: FC<Props> = ({ user }) => {
	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					bgcolor: 'background.default',
					width: `calc(100% - 660px)`,
					boxShadow: 'none',
					mx: `360px`,
					py: 1,
				}}
			>
				<Toolbar>
					<Link href={`/user/${user.id}`}>
						<UserInfoName
							width={50}
							height={50}
							image={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
							sizeTitle={18}
							cursor='pointer'
							name={user.firstname + ' ' + user.lastname}
							messageBlock={
								<Typography>был(a) в сети 3 минуты назад</Typography>
							}
						/>
					</Link>
				</Toolbar>
			</AppBar>
			<Divider />
		</>
	)
}
