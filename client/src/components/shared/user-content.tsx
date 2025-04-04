'use client'

import { ChatActions } from '@/redux/chats/async-actions'
import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import { unwrapResult } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI, FlexContainer } from '../ui'
import { ProfileSkeleton } from '../ui/profile-skeleton'
import { PostState } from './post-state'
import { ProfileInfoBlock } from './profile-info-block'

export interface Props {
	id: string
}

export const UserContent: FC<Props> = ({ id }) => {
	const profileActions = new UserActions()
	const postActions = new PostActions()
	const chatActions = new ChatActions()
	const dispatch: AppDispatch = useDispatch()
	const user = useSelector((state: RootState) => state.user.profile)
	const profile = useSelector((state: RootState) => state.auth.profile)
	const posts = useSelector((state: RootState) => state.post.posts)
	const status = useSelector((state: RootState) => state.user.statusProfile)
	const router = useRouter()

	useEffect(() => {
		dispatch(profileActions.getUser(id))
		dispatch(postActions.posts(id))
	}, [dispatch])

	const createChat = async () => {
		try {
			if (profile) {
				const resultAction = await dispatch(
					chatActions.createChat({ userId: id, profileId: String(profile.id) })
				)

				const res = unwrapResult(resultAction)

				router.push(`/chat/${res.id}`)
			}
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<>
			{status === 'loading' ? (
				<ProfileSkeleton
					heightLineTop={25}
					heightLineBottom={20}
					widthLineTop={300}
					widthLineBottom={240}
					width={80}
					widthContainer='100%'
				/>
			) : (
				<ProfileInfoBlock
					tooltipOpen={false}
					profileInfo={user}
					children={
						<FlexContainer>
							<ButtonUI click={createChat} variant='outlined'>
								Написать сообщение
							</ButtonUI>
						</FlexContainer>
					}
				/>
			)}

			<PostState status={status} posts={posts} visibleMenu={false} />
		</>
	)
}
