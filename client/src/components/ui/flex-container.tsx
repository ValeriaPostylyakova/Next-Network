import Box from '@mui/material/Box'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	mb?: number
	durection?: string
	content?: string
	pt?: number
	cursor?: string
}

export const FlexContainer: FC<Props> = ({
	children,
	mb,
	durection,
	content,
	pt,
	cursor,
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
				cursor: cursor,
			}}
		>
			{children}
		</Box>
	)
}
