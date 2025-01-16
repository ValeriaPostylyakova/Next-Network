import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {
	className?: string
}

export const ChatHeader: FC<Props> = () => {
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
					<UserInfoName
						width={50}
						height={50}
						image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
						sizeTitle={18}
						cursor='pointer'
						messageBlock={<Typography>был в сети 3 минуты назад</Typography>}
					/>
				</Toolbar>
			</AppBar>
			<Divider />
		</>
	)
}
