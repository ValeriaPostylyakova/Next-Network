'use client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { SendHorizonal, Smile } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI, FlexContainer } from '../ui'

export interface Props {
	handleWhiteComment: (e: any) => void
	value: string
	setValue: (value: string) => void
	handleClickComment: () => void
}

export const PostWriteCommentsBlock: FC<Props> = ({
	handleWhiteComment,
	value,
	setValue,
	handleClickComment,
}) => {
	return (
		<FlexContainer content='space-between' pt={2.5}>
			<FlexContainer>
				<Box
					sx={{
						borderRadius: '100%',
						p: 0.25,
						width: '45px',
						height: '45px',
						backgroundImage: 'url(/images/user-profile.svg)',
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
					onKeyDown={e => {
						handleWhiteComment(e)
					}}
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
			</FlexContainer>
			<FlexContainer>
				<ButtonUI variant='outlined'>
					<Smile />
				</ButtonUI>
				<ButtonUI variant='outlined' click={handleClickComment}>
					<SendHorizonal />
				</ButtonUI>
			</FlexContainer>
		</FlexContainer>
	)
}
