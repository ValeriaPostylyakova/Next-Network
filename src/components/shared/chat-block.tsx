import { Box, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const ChatBlock: FC<Props> = () => {
	const id = 1
	return (
		<Link href={`/chat/${id}`}>
			<Box
				sx={{
					width: '97%',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					background: 'background.default',
					py: 2,
					cursor: 'pointer',
				}}
			>
				<Box sx={{ display: 'flex', gap: '1.5rem' }}>
					<Box
						sx={{
							borderRadius: '100%',
							p: 0.25,
							width: `80px`,
							height: `80px`,
							backgroundImage: `url(https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg)`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							mb: 1,
						}}
					/>
					<Box
						sx={{
							display: 'flex',
							height: '100%',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<Typography sx={{ fontSize: `20px`, fontWeight: 600 }}>
							X_AE_A-13
						</Typography>
						<Typography
							sx={{
								fontSize: `17px`,
								fontWeight: 500,
								color: '#b5b5b5',
							}}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
							nobis.
						</Typography>
					</Box>
				</Box>
				<Typography>16:55</Typography>
			</Box>
			<Divider />
		</Link>
	)
}
