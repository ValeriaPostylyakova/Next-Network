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
		<MainWrapper mt={0}>
			<Box
				sx={{
					width: '95%',
					m: '0 auto',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<ButtonGroupTheme />
				<Divider />
				<SettingsBlock
					title='Email'
					content='valeria.postylyakova@mail.ru'
					typographyText='Контактная информация'
				/>
				<SettingsBlock title='Phone' content='8 (995)-375-77-04'>
					<Divider />
				</SettingsBlock>
				<SettingsBlock
					title='Language'
					content='English'
					typographyText='Выбор языка'
				/>
			</Box>
		</MainWrapper>
	)
}

export default Page
