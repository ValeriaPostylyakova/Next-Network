import { Box, Typography } from '@mui/material'
import { EllipsisVertical } from 'lucide-react'
import { FC } from 'react'
import { FlexContainer } from '../ui'

export interface Props {
	className?: string
}

export const PostBlockHeader: FC<Props> = () => {
	return (
		<Box
			sx={{
				pb: 1,
				mb: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<FlexContainer>
				<Box
					sx={{
						borderRadius: '100%',
						p: 0.25,
						width: '55px',
						height: '55px',
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
					<Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
						X_AE_A-13
					</Typography>
					<Typography
						sx={{ fontSize: '15px', fontWeight: 500, color: '#b5b5b5' }}
					>
						Product Desiner, slohUI
					</Typography>
				</Box>
			</FlexContainer>
			<EllipsisVertical cursor='pointer' />
		</Box>
	)
}
