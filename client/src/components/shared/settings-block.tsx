import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { FC, ReactNode } from 'react'
import { ButtonUI } from '../ui'

export interface Props {
	typographyText?: string
	title: string
	content: string
	children?: ReactNode
}

export const SettingsBlock: FC<Props> = ({
	title,
	content,
	children,
	typographyText,
}) => {
	return (
		<Box>
			<Typography sx={{ my: 3, fontSize: '1.3rem' }}>
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
				<Typography sx={{ fontWeight: 500, color: '#929292' }}>
					{title}
				</Typography>
				<Typography>{content}</Typography>
				<ButtonUI variant='outlined'>Изменить</ButtonUI>
			</Box>
			{children}
		</Box>
	)
}
