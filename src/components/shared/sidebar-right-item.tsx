import {
	Box,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
} from '@mui/material'
import { Plus } from 'lucide-react'
import { FC } from 'react'
import { FlexContainer } from '../ui'

export interface Props {}

export const SidebarRightItem: FC<Props> = () => {
	return (
		<>
			<ListItem disablePadding>
				<ListItemButton
					sx={{ py: 2, display: 'flex', justifyContent: 'space-between' }}
				>
					<FlexContainer>
						<Box
							sx={{
								borderRadius: '100%',
								p: 0.25,
								width: '40px',
								height: '40px',
								backgroundImage:
									'url(https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg)',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								mb: 1,
							}}
						/>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'start',
								flexDirection: 'column',
							}}
						>
							<Typography sx={{ fontSize: '16px', fontWeight: 600 }}>
								X_AE_A-13
							</Typography>
							<Typography
								sx={{ fontSize: '14px', fontWeight: 500, color: '#b5b5b5' }}
							>
								@valerapost
							</Typography>
						</Box>
					</FlexContainer>
					<ListItemIcon sx={{ color: '#a6a6a6' }}>
						<Plus />
					</ListItemIcon>
				</ListItemButton>
			</ListItem>
			<Divider />
		</>
	)
}
