import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { FC } from 'react'

export interface Props {
	username: string
	userImgUrl?: string
	text: string
}

export const CommentsBlock: FC<Props> = ({ username, text, userImgUrl }) => {
	return (
		<Link href={``}>
			<Box
				sx={{
					width: '98%',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center',
					background: 'background.default',
					py: 2,
					cursor: 'pointer',
				}}
			>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					{userImgUrl ? (
						<Box
							sx={{
								borderRadius: '100%',
								p: 0.25,
								width: `40px`,
								height: `40px`,
								backgroundImage: `url(${userImgUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								mb: 1,
							}}
						/>
					) : (
						<img src='/user-profile.svg' alt='avatar' width={40} height={40} />
					)}
					<Box
						sx={{
							display: 'flex',
							height: '100%',
							flexDirection: 'column',
							gap: ' 0.2rem',
						}}
					>
						<Typography sx={{ fontSize: `16px`, fontWeight: 600 }}>
							{username}
						</Typography>
						<Typography
							sx={{
								fontSize: `14px`,
								fontWeight: 500,
								color: '#b5b5b5',
							}}
						>
							{text}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Divider />
		</Link>
	)
}
