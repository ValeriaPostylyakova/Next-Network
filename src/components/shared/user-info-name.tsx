import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { FlexContainer } from '../ui'

export interface Props {
	width: number
	height: number
	image: string
	sizeTitle: number
	sizeSubTitle: number
	text: string
}

export const UserInfoName: FC<Props> = ({
	width,
	height,
	image,
	sizeSubTitle,
	sizeTitle,
	text,
}) => {
	return (
		<FlexContainer>
			<Box
				sx={{
					borderRadius: '100%',
					p: 0.25,
					width: `${width}px`,
					height: `${height}px`,
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					mb: 1,
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'start',
					flexDirection: 'column',
				}}
			>
				<Typography sx={{ fontSize: `${sizeTitle}px`, fontWeight: 600 }}>
					X_AE_A-13
				</Typography>
				<Typography
					sx={{
						fontSize: `${sizeSubTitle}px`,
						fontWeight: 500,
						color: '#b5b5b5',
					}}
				>
					{text}
				</Typography>
			</Box>
		</FlexContainer>
	)
}
