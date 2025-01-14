import { ChatFooter, ChatHeader } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={0}>
			<ChatHeader />
			<Box
				sx={{
					position: 'relative',
					width: '80%',
					pt: '100px',
					m: '0 auto',
					height: 'calc(100vh - 90px)',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						px: 2,
						py: 1,
						borderRadius: '8px 8px 0 8px',
						bgcolor: '#646464',
						maxWidth: '400px',
						height: 'auto',
						wordBreak: 'break-all',
						mb: 1,
						zIndex: 50,
					}}
				>
					<Typography>
						ghljhfgfjldjgldgldjfdkfhgjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdhggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
					</Typography>
				</Box>
			</Box>
			<ChatFooter />
		</MainWrapper>
	)
}

export default Page
