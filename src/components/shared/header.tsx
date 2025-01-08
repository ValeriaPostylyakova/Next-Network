import { AppBar, Toolbar } from '@mui/material'
import { Plus } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI } from '../ui'
import { HeaderSearch } from './search'

export interface Props {
	drawerWidth: number
}

export const Header: FC<Props> = ({ drawerWidth }) => {
	return (
		<AppBar
			position='fixed'
			sx={{
				bgcolor: 'background.default',
				boxShadow: '0px 8px 8px -7px rgba(84, 84, 84, 0.2)',
				width: `calc(100% - ${drawerWidth * 2}px)`,
				mx: `${drawerWidth}px`,
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<HeaderSearch />
				<ButtonUI variant='contained' bgcolor='#5145d6' color='#fff'>
					Add New Post
					<Plus style={{ color: '#fff' }} />
				</ButtonUI>
			</Toolbar>
		</AppBar>
	)
}
