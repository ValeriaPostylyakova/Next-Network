import { UserContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {
	params: Params
}

interface Params {
	id: string
}

const Page: FC<Props> = async ({ params }) => {
	const { id } = await params
	return (
		<MainWrapper mt={0}>
			<Box sx={{ width: '90%', m: '0 auto', pt: 3 }}>
				<UserContent id={id} />
			</Box>
		</MainWrapper>
	)
}

export default Page
