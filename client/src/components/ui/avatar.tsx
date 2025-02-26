import Avatar from '@mui/material/Avatar'
import { FC } from 'react'

export interface Props {
	imageUrl?: string
	width: number
}

export const AvatarUI: FC<Props> = ({ imageUrl, width }) => {
	return (
		<Avatar
			alt='avatar'
			src={imageUrl ? imageUrl : '/images/user-profile.svg'}
			sx={{
				width: width,
				height: width,
				cursor: 'pointer',
			}}
		/>
	)
}
