'use client'

import { RootState } from '@/redux/store'
import TextField from '@mui/material/TextField'
import { SendHorizonal, Smile } from 'lucide-react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ButtonUI, FlexContainer } from '../ui'
import { Avatar } from '@mui/material'

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
