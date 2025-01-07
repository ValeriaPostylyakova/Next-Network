'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
	palette: {
		primary: {
			main: '#a0b2e6',
			dark: '#da96ee',
		},
		secondary: {
			main: '#fff',
			dark: '#2a2a2a',
		},
	},
})

export default theme
