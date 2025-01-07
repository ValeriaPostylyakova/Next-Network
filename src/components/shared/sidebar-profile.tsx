import { Box } from '@mui/material'
import { Logs } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const SidebarProfile: FC<Props> = () => {
	return (
		<Box
			sx={{ position: 'absolute', zIndex: 20, bottom: '20px', left: '13px' }}
		>
			<Logs />
		</Box>
	)
}
