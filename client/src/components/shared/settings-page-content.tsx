'use client'

import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'
import { SettingsBlock } from './settings-block'

export const SettingsPageContent: FC = () => {
	const [openInput, setOpenInput] = useState<boolean>(false)
	return (
		<>
			<SettingsBlock
				myTitle={4}
				sizeTitle={21}
				title='Язык'
				typographyText='Выбор языка'
				open={openInput}
				setStateOpen={setOpenInput}
			>
				<Typography>Русский</Typography>
			</SettingsBlock>
		</>
	)
}
