import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { FC, ReactNode } from 'react'
import { ButtonUI } from '../ui'

export interface Props {
	typographyText?: string
	title?: string
	sizeTitle?: number
	content: string
	children?: ReactNode
	myTitle: number
	mbTitle?: number
}

export const SettingsBlock: FC<Props> = ({
	title,
	content,
	children,
	typographyText,
	sizeTitle,
	myTitle,
	mbTitle,
}) => {
	return (
		<Box>
			<Typography sx={{ my: myTitle, fontSize: `${sizeTitle}px`, mb: mbTitle }}>
				{typographyText}
			</Typography>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					py: 2,
				}}
			>
				{title && (
					<Typography sx={{ fontWeight: 500, color: '#929292' }}>
						{title}
					</Typography>
				)}
				<Typography>{content}</Typography>
				<ButtonUI variant='outlined'>Изменить</ButtonUI>
			</Box>
			{children}
		</Box>
	)
}
