import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Search } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	width: number
	placeholder: string
}

export const HeaderSearch: FC<Props> = ({ width, placeholder }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				width: `${width}px`,
			}}
		>
			<TextField
				size='small'
				sx={{
					width: `${width}px`,
					outline: 'none',
					'.MuiOutlinedInput-root': {
						borderRadius: 5,
					},
				}}
				placeholder={placeholder}
			/>

			<Search
				style={{
					position: 'absolute',
					top: '50%',
					right: '10px',
					transform: 'translateY(-50%)',
					color: '#c2c2c2',
				}}
			/>
		</Box>
	)
}
