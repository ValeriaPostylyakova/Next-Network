import { Box, Divider, Typography } from '@mui/material'
import { LogOut, UserRoundPen } from 'lucide-react'
import { FC } from 'react'
import { FlexContainer } from '../ui'

export interface Props {
	className?: string
}

export const SidebarProfile: FC<Props> = () => {
	return (
		<>
			<Box
				sx={{
					position: 'absolute',
					zIndex: 20,
					bottom: '0px',
					left: '20px',
					height: '100px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<FlexContainer content='space-between'>
					<UserRoundPen />
					<Box
						sx={{
							display: 'flex',
							alignItems: 'start',
							flexDirection: 'column',
						}}
					>
						<Typography
							sx={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}
						>
							Valeria Postylyakova
						</Typography>
						<Typography
							sx={{ fontSize: '12px', fontWeight: 500, color: '#cacaca' }}
						>
							User
						</Typography>
					</Box>
					<LogOut
						style={{ marginLeft: '2rem', color: '#fff', cursor: 'pointer' }}
					/>
				</FlexContainer>
			</Box>
		</>
	)
}
