import Badge from '@mui/material/Badge'
import { FC } from 'react'

export interface Props {
	count?: number
	fontSize: number
	width: number
}

export const BadgeUI: FC<Props> = ({ count, fontSize, width }) => {
	return (
		<Badge
			badgeContent={count && count > 99 ? '99+' : count}
			sx={{
				'& .MuiBadge-badge': {
					borderRadius: '50%',
					backgroundColor: '#636363',
					color: '#ffff',
					fontSize: fontSize,
					fontWeight: 'bold',
					minWidth: width,
					minHeight: width,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
			}}
		></Badge>
	)
}
