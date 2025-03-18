import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import { FC } from 'react'
import { CreatePostModal } from './create-post-modal'
import { HeaderSearch } from './search'

export const Header: FC = () => {
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
				<HeaderSearch
					width={420}
					placeholder='Search for friends, groups, pages'
				/>
				<CreatePostModal />
			</Toolbar>
			<Divider />
		</AppBar>
	)
}
