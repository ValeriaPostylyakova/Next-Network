import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Button from '@mui/material/Button'
import { FC, ReactNode } from 'react'

export interface Props {
	typographyText?: string
	title?: string
	sizeTitle?: number
	children?: ReactNode
	myTitle: number
	mbTitle?: number
	setStateOpen?: (value: boolean) => void
	open?: boolean
}

export const SettingsBlock: FC<Props> = ({
	title,
	children,
	typographyText,
	sizeTitle,
	myTitle,
	mbTitle,
	setStateOpen,
	open,
}) => {
	const handleButtonClick = () => {
		if (setStateOpen) {
			setStateOpen(!open)
		}
	}

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
				{children}
				<Button
					onClick={handleButtonClick}
					sx={{
						borderRadius: '1rem',
					}}
					variant='outlined'
				>
					{open ? 'Отмена' : 'Изменить'}
				</Button>
			</Box>
		</Box>
	)
}
