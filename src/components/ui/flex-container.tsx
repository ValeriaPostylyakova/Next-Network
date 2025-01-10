import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	mb?: string
	durection?: string
	content?: string
	pt?: number
}

export const FlexContainer: FC<Props> = ({
	children,
	mb,
	durection,
	content,
	pt,
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
				pt: pt,
			}}
		>
			{children}
		</Box>
	)
}
