import { AuthForm, RegisterForm } from '@/components/shared'
import { ContainerUI } from '@/components/ui'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

interface Props {}

const LoginPage: FC<Props> = () => (
	<Box
		sx={{
			display: 'grid',
			placeItems: 'center',
			height: '90vh',
		}}
	>
		<ContainerUI width='65%'>
			<Image width={500} height={500} src='/images/logo.svg' alt='logo' />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'start',
					gap: '1rem',
				}}
			>
				<Typography
					variant='h2'
					fontWeight={600}
					sx={{
						mb: 2,
					}}
				>
					В курсе <br />
					происходящего
				</Typography>
				<Typography
					variant='h4'
					fontWeight={600}
					sx={{
						mb: 6,
					}}
				>
					Присоединяйтесь сегодня.
				</Typography>
				<RegisterForm />
				<Typography variant='h6' fontWeight={600}>
					Уже зарегистрированы?
				</Typography>
				<AuthForm />
			</Box>
		</ContainerUI>
	</Box>
)

export default LoginPage
