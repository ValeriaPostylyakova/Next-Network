import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'

import { Plus } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI } from '../ui'
import { HeaderSearch } from './search'

export interface Props {}

export const Header: FC<Props> = () => {
	return (
		<AppBar
			position='fixed'
			sx={{
				bgcolor: 'background.default',
				width: `calc(100% - 660px)`,
				boxShadow: 'none',
				mx: `360px`,
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
			<Divider />
		</AppBar>
	)
}
