import { EditProfileContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {
	params: { id: string }
}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={0} pt={3}>
			<Box
				sx={{
					width: '73%',
					m: '0 auto',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<EditProfileContent />
			</Box>
		</MainWrapper>
	)
}

export default Page
