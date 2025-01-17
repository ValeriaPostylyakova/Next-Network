'use client'

import Button from '@mui/material/Button'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	variant: 'text' | 'outlined' | 'contained'
	m?: string
	bgcolor?: string
	click?: () => void
	width?: string
	color?: string
	fontWeight?: number
	px?: number
}

{
	/* <Button
            sx={[
                theme => ({
                    backgroundColor: theme.palette.primary.main,
                }),
                theme =>
                    theme.applyStyles('dark', {
                        backgroundColor: theme.palette.primary.dark,
                    }),
            ]}
        >
            Submit
        </Button> */
}

export const ButtonUI: FC<Props> = ({
	children,
	variant,
	m,
	bgcolor,
	click,
	width,
	color,
	fontWeight,
	px,
}) => {
	return (
		<Button
			onClick={click}
			variant={variant}
			sx={{
				px: px || 2,
				borderRadius: '1rem',
				display: 'flex',
				alignItems: 'center',
				gap: '1rem',
				mb: m,
				bgcolor: bgcolor,
				width: width,
				color: color,
				fontWeight: fontWeight || 600,
			}}
		>
			{children}
		</Button>
	)
}
