'use client'

import Box from '@mui/material/Box'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Logo } from '../ui/logo'

const GreetingsPage = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/login')
		}, 1000)
	}, [])

	return (
		<Box
			sx={{
				height: '100vh',
				bgcolor: '#000',
			}}
		>
			<Box
				sx={{
					height: '80vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						height: '100%',
						alignItems: 'center',
					}}
				>
					<Logo />
				</Box>
			</Box>
		</Box>
	)
}

export default GreetingsPage
