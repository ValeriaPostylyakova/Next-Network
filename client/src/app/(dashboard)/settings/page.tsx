import { ButtonGroupTheme } from '@/components/shared'
import { SettingsPageContent } from '@/components/shared/settings-page-content'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

const Page = () => {
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
				<ButtonGroupTheme />
				<Divider />
				<SettingsPageContent />
			</Box>
		</MainWrapper>
	)
}

export default Page
