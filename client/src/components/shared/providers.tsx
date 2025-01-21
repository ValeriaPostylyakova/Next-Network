import StoreProvider from '@/app/storeProvider'
import theme from '@/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Toaster } from 'react-hot-toast'

import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
	return (
		<>
			<Toaster />
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<StoreProvider>{children}</StoreProvider>
				</ThemeProvider>
			</AppRouterCacheProvider>
		</>
	)
}
