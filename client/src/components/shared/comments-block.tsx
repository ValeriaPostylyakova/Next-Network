'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { Heart } from 'lucide-react'
import { FC, useState } from 'react'
import { AvatarUI } from '../ui'

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
	const [clickLike, setClickLike] = useState<boolean>(false)

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
					<AvatarUI width={55} imageUrl={userImgUrl} />

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
				<button onClick={() => setClickLike(!clickLike)}>
					{clickLike ? (
						<Heart color='#ff3030' size={22} />
					) : (
						<Heart color='#d3d3d3' size={22} />
					)}
				</button>
			</Box>
			<Divider />
		</>
	)
}
