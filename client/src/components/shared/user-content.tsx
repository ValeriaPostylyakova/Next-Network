'use client'

import { ChatActions } from '@/redux/chats/async-actions'
import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import { unwrapResult } from '@reduxjs/toolkit'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI, FlexContainer } from '../ui'
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

				unwrapResult(resultAction)
			}
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<>
			<ProfileInfoBlock
				tooltipOpen={false}
				profileInfo={user}
				children={
					<FlexContainer>
						<Link href={`/chat/${id}`}>
							<ButtonUI click={createChat} variant='outlined'>
								Написать сообщение
							</ButtonUI>
						</Link>
						{/* <Link href={`/editProfile`}>
							<ButtonUI variant='outlined'>Добавить в друзья</ButtonUI>
						</Link> */}
					</FlexContainer>
				}
			/>
			<PostState status={status} posts={posts} visibleMenu={false} />
		</>
	)
}
