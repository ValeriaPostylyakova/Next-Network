'use client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FC, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export interface Props {
	label: string
	name: string
	placeholder?: string
	type?: string
	autoComplete?: string
	children?: ReactNode
}

export const FormItem: FC<Props> = ({
	label,
	placeholder,
	type,
	name,
	autoComplete,
	children,
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const errorText = errors[name]?.message as string

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: '0.6rem',
				mb: 3,
				'&:last-child': {
					mb: 0,
				},
			}}
		>
			<Typography ml={0.2}>{label}</Typography>

			<TextField
				{...register(name)}
				type={type}
				placeholder={placeholder ? placeholder : label}
				autoComplete={autoComplete}
				sx={{
					'& .MuiOutlinedInput-root': {
						borderRadius: '0.7rem',
						width: '450px',
					},
				}}
			/>
			{children}

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
		</Box>
	)
}
