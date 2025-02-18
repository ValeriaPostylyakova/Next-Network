import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	text?: string
	postImageUrl?: string
}

export const PostBlockContent: FC<Props> = ({ text, postImageUrl }) => {
	return (
		<>
			<Typography component='p' sx={{ fontSize: '16px', my: 2 }}>
				{text}
			</Typography>
			{postImageUrl !== null && (
				<img
					src={postImageUrl}
					style={{
						width: '100%',
						height: '450px',
						borderRadius: '7px',
						marginBottom: 2,
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
			)}
		</>
	)
}
