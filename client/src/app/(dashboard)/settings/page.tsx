import { ButtonGroupTheme, SettingsBlock } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import { FC } from 'react'

interface Props {
	className?: string
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
				<ButtonGroupTheme />
				<Divider />

				<SettingsBlock
					myTitle={4}
					sizeTitle={21}
					title='Language'
					content='English'
					typographyText='Выбор языка'
				/>
			</Box>
		</MainWrapper>
	)
}

export default Page
