import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	text: string
	className: string
	time: string
}

export const Message: FC<Props> = ({ text, className, time }) => {
	return (
		<div
			className={className}
			style={{
				display: 'flex',
				gap: '0.5rem',
				flexGrow: 0,
				alignItems: 'flex-end',
			}}
		>
			<Typography
				sx={{
					fontSize: '17px',
				}}
			>
				{text}
			</Typography>
			<Typography
				sx={{
					fontSize: '13px',
					mt: 1,
					fontStyle: 'italic',
					justifyContent: 'flex-end',
				}}
			>
				{time}
			</Typography>
		</div>
	)
}
