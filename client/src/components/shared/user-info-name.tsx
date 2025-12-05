'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC, ReactNode } from 'react'
import { TProfile } from '../../../@types/profile'
import { AvatarIsOnline, AvatarUI, FlexContainer } from '../ui'

export interface Props {
	width: number
	image?: string
	sizeTitle: number
	sizeSubTitle?: number
	text?: string
	messageBlock?: ReactNode
	cursor?: string
	name?: string
	mb?: number
	profile?: TProfile
	identifier?: string
}

export const UserInfoName: FC<Props> = ({
	width,
	image,
	sizeSubTitle,
	sizeTitle,
	text,
	messageBlock,
	name,
	profile,
	mb,
	identifier,
}) => {
	return (
		<FlexContainer mb={mb}>
			{profile?.isOnline === 'online' ? (
				<AvatarIsOnline
					image={image ? image : '/images/user-profile.svg'}
					circleWidth={10}
					width={width}
					bottom={0}
				/>
			) : (
				<AvatarUI
					width={width}
					imageUrl={image ? image : '/images/user-profile.svg'}
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
						sx={[
							theme => ({
								fontSize: `${sizeSubTitle}px`,
								fontWeight: 500,
								color: '#6f6f6f',
							}),
							theme =>
								theme.applyStyles('dark', {
									color: '#b5b5b5',
								}),
						]}
					>
						{text}
					</Typography>
				)}
				{identifier && (
					<Typography
						sx={{
							fontWeight: 500,
							color: '#ffffff',
							fontSize: '14px',
						}}
					>
						{identifier}
					</Typography>
				)}
				{messageBlock && messageBlock}
			</Box>
		</FlexContainer>
	)
}
