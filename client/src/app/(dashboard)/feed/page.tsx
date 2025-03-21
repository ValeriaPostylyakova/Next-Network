import { FeedContent, Header } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

const Page: FC = () => {
	return (
		<MainWrapper mt={65}>
			<Box sx={{ width: '94%', m: '0 auto', pt: 3 }}>
				<Header />
				<FeedContent />
			</Box>
		</MainWrapper>
	)
}

export default Page
