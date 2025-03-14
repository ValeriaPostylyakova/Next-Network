'use client'

import { RootState } from '@/redux/store'
import TextField from '@mui/material/TextField'
import { SendHorizonal, Smile } from 'lucide-react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { AvatarUI, ButtonUI, FlexContainer } from '../ui'

export interface Props {
	handleInputComment: (e: React.KeyboardEvent) => Promise<void>
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
	const profile = useSelector((state: RootState) => state.auth.profile)
	return (
		<FlexContainer content='space-between' pt={2.5}>
			<FlexContainer>
				<AvatarUI width={45} imageUrl={profile.imageUrl} />
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
					onKeyDown={handleInputComment}
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
			</FlexContainer>
			<FlexContainer>
				<ButtonUI click={() => setShowEmoji(!showEmoji)} variant='outlined'>
					<Smile />
				</ButtonUI>

				<ButtonUI variant='outlined' click={handleInputComment}>
					<SendHorizonal />
				</ButtonUI>
			</FlexContainer>
		</FlexContainer>
	)
}
