import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	mb?: string
	durection?: string
	content?: string
}

export const FlexContainer: FC<Props> = ({
	children,
	mb,
	durection,
	content,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDurection: durection,
				alignItems: 'center',
				gap: '1rem',
				justifyContent: content,
				mb: mb,
			}}
		>
			{children}
		</Box>
	)
}
