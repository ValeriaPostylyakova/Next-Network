'use client'
import { store } from '@/redux/store'
import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import Box from '@mui/material/Box'
import { Provider } from 'react-redux'

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Provider store={store}>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<Box
						sx={{
							position: 'relative',
							width: '100vw',
							minHeight: '100vh',
							bgcolor: 'background.default',
							color: 'text.primary',
						}}
					>
						{children}
					</Box>
				</ThemeProvider>
			</AppRouterCacheProvider>
		</Provider>
	)
}
