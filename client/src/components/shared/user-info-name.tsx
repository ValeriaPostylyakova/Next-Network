import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC, ReactNode } from 'react'
import { TProfile } from '../../../@types/profile'
import { AvatarIsOnline, FlexContainer } from '../ui'

export interface Props {
	width: number
	height: number
	image: string
	sizeTitle: number
	sizeSubTitle?: number
	text?: string
	messageBlock?: ReactNode
	cursor?: string
	name?: string
	mb?: number
	profile?: TProfile
}

export const UserInfoName: FC<Props> = ({
	width,
	height,
	image,
	sizeSubTitle,
	sizeTitle,
	text,
	messageBlock,
	name,
	profile,
	mb,
}) => {
	return (
		<FlexContainer mb={mb}>
			{profile?.isOnline === 'online' ? (
				<AvatarIsOnline
					image={image}
					circleWidth={10}
					width={width}
					bottom={0}
				/>
			) : (
				<Avatar
					alt='avatar'
					src={image ? image : '/images/user-profile.svg'}
					sx={{
						width: `${width}px`,
						height: `${height}px`,
					}}
				/>
			)}

			<Box
				sx={{
					display: 'flex',
					alignItems: 'start',
					flexDirection: 'column',
				}}
			>
				<Typography sx={{ fontSize: `${sizeTitle}px`, fontWeight: 600 }}>
					{name}
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
