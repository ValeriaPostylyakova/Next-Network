'use client'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { useColorScheme } from '@mui/material/styles'

import { FC } from 'react'

export interface Props {}

export const ButtonGroupTheme: FC<Props> = () => {
	const { mode, setMode } = useColorScheme()
	if (!mode) {
		return null
	}

	return (
		<FormControl sx={{ mt: 4, ml: 2 }}>
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
