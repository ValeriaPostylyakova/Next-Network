'use client'

import { ButtonGroupTheme, SettingsBlock } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import { FC, useState } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	const [openInput, setOpenInput] = useState<boolean>(false)
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
					typographyText='Выбор языка'
					open={openInput}
					setStateOpen={setOpenInput}
				>
					<Typography>Русский</Typography>
				</SettingsBlock>
			</Box>
		</MainWrapper>
	)
}

export default Page
