'use client'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

export interface Props {
	label: string
	name: string
	placeholder?: string
	type?: string
	autoComplete?: string
}

export const FormItem: FC<Props> = ({
	label,
	placeholder,
	type,
	name,
	autoComplete,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const errorText = errors[name]?.message as string

	return (
		<>
			<Typography sx={{ mt: 1, mb: -0.4 }}>{label}</Typography>
			<TextField
				{...register(name)}
				type={type}
				placeholder={placeholder ? placeholder : label}
				autoComplete={autoComplete}
				sx={{
					'& .MuiOutlinedInput-root': {
						borderRadius: '0.8rem',
					},
				}}
			/>
			{errors[name] && (
				<Typography
					sx={{
						fontSize: '16px',
						mt: -0.7,
						color: '#ff4c4c',
					}}
				>
					{errorText}
				</Typography>
			)}
		</>
	)
}
