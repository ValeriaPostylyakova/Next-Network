'use client'

import { Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Logo } from '../ui/logo'

const GreetingsPage = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push('/login')
		}, 3000)
	}, [])

	return (
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
	)
}

export default GreetingsPage
