'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { Ellipsis } from 'lucide-react'
import { FC, JSX, useState } from 'react'
import { FlexContainer } from '../ui'

export interface Props {
	icon: JSX.Element
	title: string
	ml: number
}

export const MenuBlockButton: FC<Props> = ({ icon, title, ml }) => {
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
				sx={[
					theme => ({
						color: '#000',
					}),
					theme =>
						theme.applyStyles('dark', {
							color: '#fff',
						}),
				]}
			>
				<Ellipsis size={30} />
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{ ml: ml }}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>
					<FlexContainer>
						{icon}
						<Typography sx={{ fontSize: '14px' }}>{title}</Typography>
					</FlexContainer>
				</MenuItem>
			</Menu>
		</Box>
	)
}
