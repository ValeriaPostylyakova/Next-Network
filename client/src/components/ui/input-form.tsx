import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { FC } from 'react'

export interface Props {
	labelText: string
	value: string
	setValue: (value: string) => void
}

export const InputFormUI: FC<Props> = ({ labelText, value, setValue }) => {
	return (
		<Box>
			<TextField
				type='text'
				label={`${labelText}:`}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</Box>
	)
}
