import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	label: string
	placeholder?: string
}

export const FormItem: FC<Props> = ({ label, placeholder }) => {
	return (
		<>
			<Typography sx={{ mt: 1, mb: -0.4 }}>{label}</Typography>
			<TextField
				placeholder={placeholder ? placeholder : label}
				sx={{
					'& .MuiOutlinedInput-root': {
						borderRadius: '0.8rem',
					},
				}}
			/>
		</>
	)
}
