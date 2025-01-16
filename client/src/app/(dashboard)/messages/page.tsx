import { ChatBlock } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={0}>
			<Box sx={{ width: '100%', m: '0 auto' }}>
				<ChatBlock />
				<ChatBlock />
				<ChatBlock />
			</Box>
		</MainWrapper>
	)
}

export default Page
