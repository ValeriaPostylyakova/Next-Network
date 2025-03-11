'use client'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { useColorScheme } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {}

export const ButtonGroupTheme: FC<Props> = () => {
	const { mode, setMode } = useColorScheme()
	if (!mode) {
		return null
	}

	return (
		<>
			<Typography sx={{ mb: 5, fontSize: '1.3rem', pt: 3 }}>
				Выбор темы
			</Typography>
			<FormControl sx={{ pb: 3 }}>
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
		</>
	)
}
