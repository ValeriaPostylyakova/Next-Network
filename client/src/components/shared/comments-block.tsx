import { Avatar } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Heart } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	username: string
	userImgUrl?: string
	text: string
	date: string
}

export const CommentsBlock: FC<Props> = ({
	username,
	text,
	userImgUrl,
	date,
}) => {
	return (
		<>
			<Box
				sx={{
					width: '98%',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					background: 'background.default',
					cursor: 'pointer',
					py: 2,
				}}
			>
				<Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
					<Avatar
						alt='avatar'
						src={userImgUrl ? userImgUrl : '/images/user-profile.svg'}
						sx={{
							width: 55,
							height: 55,
						}}
					/>

					<Box
						sx={{
							display: 'flex',
							alignItems: 'start',
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
								mb: 1,
							}}
						>
							{text}
						</Typography>
						<Typography
							sx={{
								fontSize: '12px',
							}}
						>
							{date}
						</Typography>
					</Box>
				</Box>
				<Heart color='#d3d3d3' size={22} />
			</Box>
			<Divider />
		</>
	)
}
