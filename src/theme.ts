'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
	palette: {
		primary: {
			main: '#5142f5',
			dark: '#da96ee',
			light: '#5142f5',
		},
		secondary: {
			main: '#fff',
			dark: '#000',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
})

export default theme
