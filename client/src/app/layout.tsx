import { Providers } from '@/components/shared/providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({
	variable: '--font-poppins',
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Next-Network',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<link
				rel='shortcut icon'
				href='/next-network-icons.png'
				type='image/x-icon'
			/>
			<body className={`${poppins.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
