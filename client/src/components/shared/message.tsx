import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	text: string
	className: string
}

export const Message: FC<Props> = ({ text, className }) => {
	return (
		<div className={className}>
			<Typography>{text}</Typography>
		</div>
	)
}

// received
// sent
