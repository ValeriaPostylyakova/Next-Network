import Badge from '@mui/material/Badge'
import { FC } from 'react'
import { AvatarUI } from './avatar'

export interface Props {
	image?: string
	width: number
	circleWidth: number
	bottom: number
}

export const AvatarIsOnline: FC<Props> = ({
	image,
	width,
	circleWidth,
	bottom,
}) => {
	return (
		<Badge
			overlap='circular'
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			variant='dot'
			sx={{
				'&::after': {
					position: 'absolute',
					bottom: bottom,
					right: 0,
					width: `${circleWidth}px`,
					height: `${circleWidth}px`,
					borderRadius: '50%',
					bgcolor: '#009d0d',
					animation: 'ripple 1.2s infinite ease-in-out',
					border: '1px solid currentColor',
					content: '""',
				},
			}}
		>
			<AvatarUI width={width} imageUrl={image} />
		</Badge>
	)
}
