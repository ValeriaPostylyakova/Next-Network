import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ArrowUpFromDot } from 'lucide-react'
import { ChangeEvent, FC } from 'react'

export interface Props {
	handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CreatePostModalImageEmpty: FC<Props> = ({ handleImageChange }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '300px',
				borderWidth: '1px',
				borderColor: '#888888',
				borderStyle: 'dashed',
				borderRadius: 2,
				mb: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<Box
					sx={{
						px: 1.5,
						py: 1,
						borderWidth: '2px',
						borderColor: '#fff',
						borderStyle: 'dashed',
						borderRadius: 3,
					}}
				>
					<ArrowUpFromDot size={30} />
				</Box>
				<Typography
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					fontSize='18px'
					mb={2}
				>
					Добавьте фото или видео
				</Typography>

				<input name='post' type='file' onChange={handleImageChange} />
			</Box>
		</Box>
	)
}
