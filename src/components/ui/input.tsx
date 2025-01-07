'use client'

import { Textarea } from '@mui/joy'
import { FC } from 'react'

export interface Props {
	display?: string
	placeholder: string
	size: 'sm' | 'md' | 'lg'
}

export const InputUI: FC<Props> = ({ display, placeholder, size }) => {
	return (
		<Textarea
			placeholder={placeholder}
			size={size}
			sx={{
				py: 2,
				px: 4,
				display: display || 'block',
				alignItems: 'center',
				gap: '1rem',
			}}
		/>
	)
}
