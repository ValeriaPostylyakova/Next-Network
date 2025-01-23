import { Header, ProfileContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'

const Page = ({
	params: { indificator },
}: {
	params: { indificator: string }
}) => {
	return (
		<MainWrapper mt={65}>
			<Box sx={{ width: '90%', m: '0 auto', pt: 3 }}>
				<Header />
				<ProfileContent indificator={indificator} />
			</Box>
		</MainWrapper>
	)
}

export default Page
