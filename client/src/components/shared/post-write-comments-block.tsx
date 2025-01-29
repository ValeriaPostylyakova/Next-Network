'use client'

import { CommentsActions } from '@/redux/comments/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { SendHorizontal, Smile } from 'lucide-react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI, FlexContainer } from '../ui'

export interface Props {
	className?: string
}

export const PostWriteCommentsBlock: FC<Props> = () => {
	const commentActions = new CommentsActions()
	const profileInfo = useSelector(
		(state: RootState) => state.profile.profileInfo
	)

	const dispatch: AppDispatch = useDispatch()

	const handleWhiteComment = async (e: any) => {
		if (e.code === 'Enter' && profileInfo) {
			const data = await dispatch(
				commentActions.createComment({
					id: profileInfo.id,
					username: profileInfo.fullname,
					userImgUrl: profileInfo.userImageUrl,
					text: e.target.value,
				})
			)

			console.log(data.payload)
			e.target.value = ''
		}
	}
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
					onKeyDown={e => {
						handleWhiteComment(e)
					}}
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
