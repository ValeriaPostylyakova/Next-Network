import { Box, TextField } from '@mui/material'
import { Search } from 'lucide-react'
import { FC } from 'react'

export interface Props {
	className?: string
}

export const HeaderSearch: FC<Props> = () => {
	return (
		<Box
			sx={{
				position: 'relative',
			}}
		>
			<TextField
				size='small'
				sx={{
					width: '420px',
					outline: 'none',
					'.MuiOutlinedInput-root': {
						borderRadius: 5,
					},
				}}
				placeholder='Search for friends, groups, pages'
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
