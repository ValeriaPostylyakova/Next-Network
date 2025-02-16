'use client'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
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
	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.user.profile)
	const posts = useSelector((state: RootState) => state.post.posts)
	const status = useSelector((state: RootState) => state.user.statusProfile)

	useEffect(() => {
		dispatch(profileActions.getUser(id))
		dispatch(postActions.posts(id))
	}, [dispatch])

	return (
		<>
			<ProfileInfoBlock
				profileInfo={profile}
				children={
					<FlexContainer>
						<Link href={`/chat/${id}`}>
							<ButtonUI variant='outlined'>Написать сообщение</ButtonUI>
						</Link>
						<Link href={`/editProfile`}>
							<ButtonUI variant='outlined'>Добавить в друзья</ButtonUI>
						</Link>
					</FlexContainer>
				}
			/>
			<PostState status={status} posts={posts} visibleMenu={false} />
		</>
	)
}
