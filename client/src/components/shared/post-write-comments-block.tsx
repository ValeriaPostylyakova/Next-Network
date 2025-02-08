'use client'

import { RootState } from '@/redux/store'
import { Avatar } from '@mui/material'
import TextField from '@mui/material/TextField'
import { SendHorizonal, Smile } from 'lucide-react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ButtonUI, FlexContainer } from '../ui'

export interface Props {
	handleInputComment: (e: any) => void
	value: string
	setValue: (value: string) => void
	showEmoji: boolean
	setShowEmoji: (value: boolean) => void
}

export const PostWriteCommentsBlock: FC<Props> = ({
	handleInputComment,
	value,
	setValue,
	showEmoji,
	setShowEmoji,
}) => {
	const user = useSelector((state: RootState) => state.auth.user)
	return (
		<FlexContainer content='space-between' pt={2.5}>
			<FlexContainer>
				<Avatar
					alt='avatar'
					src={user.imageUrl ? user.imageUrl : '/images/user-profile.svg'}
					sx={{
						width: 45,
						height: 45,
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
						handleInputComment(e)
					}}
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
			</FlexContainer>
			<FlexContainer>
				<ButtonUI click={() => setShowEmoji(!showEmoji)} variant='outlined'>
					<Smile />
				</ButtonUI>

				<ButtonUI variant='outlined' click={e => handleInputComment(e)}>
					<SendHorizonal />
				</ButtonUI>
			</FlexContainer>
		</FlexContainer>
	)
}
