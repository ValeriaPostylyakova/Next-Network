import { Header, ProfileContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

type Params = {
	id: string
}

interface Props {
	params: Params
}

const Page: FC<Props> = async ({ params }) => {
	const { id } = await params
	return (
		<MainWrapper mt={65}>
			<Box sx={{ width: '90%', m: '0 auto', pt: 3 }}>
				<Header />
				<ProfileContent id={id} />
			</Box>
		</MainWrapper>
	)
}

export default Page
