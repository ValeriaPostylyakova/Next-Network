import {
	Header,
	PostBlock,
	SidebarLeft,
	SidebarRight,
	StoriesBlock,
} from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import { Box } from '@mui/material'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Header />
			<SidebarLeft />
			<MainWrapper>
				<Box sx={{ width: '95%', m: '0 auto', pt: 3 }}>
					<StoriesBlock />
					<PostBlock />
				</Box>
			</MainWrapper>
			<SidebarRight />
		</Box>
	)
}

export default Page
