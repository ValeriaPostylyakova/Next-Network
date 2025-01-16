'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { Ellipsis, Trash2 } from 'lucide-react'
import { FC, useState } from 'react'
import { FlexContainer } from '../ui'

export interface Props {
	className?: string
}

export const FriendBlockButton: FC<Props> = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Box>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Ellipsis size={30} />
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ ml: -17 }}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>
					<FlexContainer>
						<Trash2 />
						<Typography sx={{ fontSize: '14px' }}>Удалить из друзей</Typography>
					</FlexContainer>
				</MenuItem>
			</Menu>
		</Box>
	)
}
