import { Box } from '@mui/material'
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
	status: string | null
}

export const ChatHeader: FC<Props> = ({ user, status }) => {
	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					bgcolor: 'background.default',
					width: `calc(100% - 660px)`,
					boxShadow: 'none',
					mx: `360px`,
					flexShrink: 0,
					py: 1,
				}}
			>
				<Toolbar>
					<Link href={`/user/${user.id}`}>
						<UserInfoName
							width={50}
							image={user.imageUrl}
							sizeTitle={18}
							cursor='pointer'
							name={user.firstname + ' ' + user.lastname}
							messageBlock={
								status ? (
									<Box className='typing-indicator'>
										<Typography>{status}</Typography>
										<div className='typing-dots'>
											<Box component='span' />
											<Box component='span' />
											<Box component='span' />
										</div>
									</Box>
								) : (
									<Typography>{user.isOnline}</Typography>
								)
							}
						/>
					</Link>
				</Toolbar>
			</AppBar>
			<Divider />
		</>
	)
}
