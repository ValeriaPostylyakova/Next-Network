import { Header, SidebarLeft, SidebarRight } from '@/components/shared'
import { Box } from '@mui/material'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	const drawerWidth = 300

	return (
		<Box sx={{ display: 'flex' }}>
			<Header drawerWidth={drawerWidth} />
			<SidebarLeft drawerWidth={drawerWidth} />
			<SidebarRight />
		</Box>
	)
}

export default Page
