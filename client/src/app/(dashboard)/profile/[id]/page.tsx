import { Header, ProfileContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'

const Page = async ({ params: { id } }: { params: { id: string } }) => {
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
