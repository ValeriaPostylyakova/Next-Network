'use client'

import { Button } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface Props {
	children: ReactNode
	variant: 'text' | 'outlined' | 'contained'
	m?: string
	bgcolor?: string
	click?: () => void
	width?: string
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
}) => {
	return (
		<Button
			onClick={click}
			variant={variant}
			sx={{
				px: 4,
				borderRadius: '1rem',
				display: 'flex',
				alignItems: 'center',
				gap: '1rem',
				mb: m,
				bgcolor: bgcolor,
				width: width,
			}}
		>
			{children}
		</Button>
	)
}
