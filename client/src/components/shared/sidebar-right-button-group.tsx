'use-client'

import Box from '@mui/material/Box'
import { MessageCircleMore, Settings } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import { ButtonUI } from '../ui'

export interface Props {
	className?: string
}

export const SidebarRightButtonGroup: FC<Props> = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
			}}
		>
			<Link href='/settings'>
				<ButtonUI variant='outlined'>
					<Settings />
				</ButtonUI>
			</Link>
			<Link href='/messages'>
				<ButtonUI variant='outlined'>
					<MessageCircleMore />
				</ButtonUI>
			</Link>
		</Box>
	)
}
