import { useOpenModal } from '@/hooks/use-open-modal'
import { Dialog } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

export interface Props {
	text?: string
	postImageUrl?: string
}

export const PostBlockContent: FC<Props> = ({ text, postImageUrl }) => {
	const { open, setOpen } = useOpenModal()

	return (
		<>
			<Typography component='p' sx={{ fontSize: '16px', my: 2 }}>
				{text}
			</Typography>
			{postImageUrl !== null && (
				<img
					onClick={() => setOpen(true)}
					src={postImageUrl}
					style={{
						width: '100%',
						maxWidth: '100%',
						minWidth: '500px',
						maxHeight: '450px',
						borderRadius: '7px',
						marginBottom: 2,
						objectFit: 'contain',
						objectPosition: 'center',
						cursor: 'pointer',
					}}
				/>
			)}

			<Dialog open={open} onClose={() => setOpen(false)}>
				<img
					src={postImageUrl}
					style={{
						width: '100%',
						height: 'auto',
						borderRadius: '7px',
						objectFit: 'contain',
						objectPosition: 'center',
					}}
				/>
			</Dialog>
		</>
	)
}
