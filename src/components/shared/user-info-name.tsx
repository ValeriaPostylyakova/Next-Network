import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC, ReactNode } from 'react'
import { FlexContainer } from '../ui'

export interface Props {
	width: number
	height: number
	image: string
	sizeTitle: number
	sizeSubTitle?: number
	text?: string
	messageBlock?: ReactNode
	cursor?: string
}

export const UserInfoName: FC<Props> = ({
	width,
	height,
	image,
	sizeSubTitle,
	sizeTitle,
	text,
	messageBlock,
	cursor,
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
					cursor: cursor,
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
				{sizeSubTitle && (
					<Typography
						sx={{
							fontSize: `${sizeSubTitle}px`,
							fontWeight: 500,
							color: '#b5b5b5',
						}}
					>
						{text}
					</Typography>
				)}
				{messageBlock && messageBlock}
			</Box>
		</FlexContainer>
	)
}
