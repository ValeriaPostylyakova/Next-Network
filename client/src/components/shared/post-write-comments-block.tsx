import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { SendHorizontal, Smile } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI, FlexContainer } from '../ui'

export interface Props {
	className?: string
}

export const PostWriteCommentsBlock: FC<Props> = () => {
	return (
		<FlexContainer content='space-between' pt={2.5}>
			<FlexContainer>
				<Box
					sx={{
						borderRadius: '100%',
						p: 0.25,
						width: '45px',
						height: '45px',
						backgroundImage: 'url(/user-profile.svg)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						mb: 1,
					}}
				/>
				<TextField
					size='small'
					sx={{
						width: '400px',
						outline: 'none',
						'.MuiOutlinedInput-root': {
							borderRadius: 5,
						},
					}}
					placeholder='Write your comment..'
				/>
			</FlexContainer>
			<FlexContainer>
				<ButtonUI variant='outlined'>
					<Smile />
				</ButtonUI>
				<ButtonUI variant='outlined'>
					<SendHorizontal />
				</ButtonUI>
			</FlexContainer>
		</FlexContainer>
	)
}
