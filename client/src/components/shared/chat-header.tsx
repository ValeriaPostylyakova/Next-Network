import { Box } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Trash } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { TProfile } from '../../../@types/profile'
import { MenuBlockButton } from './menu-block-button'
import { UserInfoName } from './user-info-name'

export interface Props {
	user: TProfile
	status: string | null
	deleteChat: () => void
}

export const ChatHeader: FC<Props> = ({ user, status, deleteChat }) => {
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
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
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
					<MenuBlockButton
						ml={-9}
						icon={<Trash size={20} />}
						title='Удалить чат'
						handleClickItem={deleteChat}
					/>
				</Box>
			</AppBar>
			<Divider />
		</>
	)
}
