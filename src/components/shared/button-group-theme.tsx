'use client'

import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	useColorScheme,
} from '@mui/material'
import { FC } from 'react'

export interface Props {}

export const ButtonGroupTheme: FC<Props> = () => {
	const { mode, setMode } = useColorScheme()
	if (!mode) {
		return null
	}

	return (
		<FormControl
			sx={{
				position: 'absolute',
				top: '0.5rem',
				right: '0.5rem',
				zIndex: '100',
			}}
		>
			<FormLabel id='demo-theme-toggle'>Theme</FormLabel>
			<RadioGroup
				aria-labelledby='demo-theme-toggle'
				name='theme-toggle'
				row
				value={mode}
				onChange={event =>
					setMode(event.target.value as 'system' | 'light' | 'dark')
				}
			>
				<FormControlLabel value='system' control={<Radio />} label='System' />
				<FormControlLabel value='light' control={<Radio />} label='Light' />
				<FormControlLabel value='dark' control={<Radio />} label='Dark' />
			</RadioGroup>
		</FormControl>
	)
}
