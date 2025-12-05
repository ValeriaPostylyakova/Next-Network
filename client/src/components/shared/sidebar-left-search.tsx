'use client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Search } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	value: string
	setValue: (value: string) => void
}

export const SidebarLeftSearch: FC<Props> = ({ value, setValue }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				ml: -1,
			}}
		>
			<Search
				style={{
					position: 'absolute',
					top: '50%',
					left: '10px',
					transform: 'translateY(-50%)',
					color: '#c2c2c2',
				}}
			/>
			<TextField
				value={value}
				onChange={e => setValue(e.target.value)}
				size='small'
				sx={{
					width: '100%',
					'& .MuiOutlinedInput-root': {
						borderRadius: 4.3,
						pl: '30px',
						color: 'white',
						'& fieldset': {
							borderColor: '#ffffff',
						},
						'&:hover fieldset': {
							borderColor: '#ffffff',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#ffffff',
						},
					},
				}}
				placeholder='Search'
			/>
		</Box>
	)
}
