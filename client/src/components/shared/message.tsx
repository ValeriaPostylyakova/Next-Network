import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	text: string
	align: string
}

export const Message: FC<Props> = ({ text, align }) => {
	return (
		<>
			<Typography
				sx={{
					p: '6px 10px',
					borderRadius: '10px 10px 0 10px',
					fontSize: '20px',
					textAlign: `${align}`,
				}}
			>
				{text}
			</Typography>
		</>
	)
}
