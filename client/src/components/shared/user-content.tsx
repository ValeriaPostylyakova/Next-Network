'use client'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI, FlexContainer } from '../ui'
import { PostSkeleton } from '../ui/post-skeleton'
import { BlockEmpty } from './block-empty'
import { PostBlock } from './post-block'
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
			{status === 'loading' ? (
				[...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
			) : (
				<>
					{posts.length > 0 ? (
						<Box sx={{ width: '100%', mt: 5 }}>
							{posts?.map(post => (
								<PostBlock visibleMenu={false} key={post.id} {...post} />
							))}
						</Box>
					) : (
						<BlockEmpty
							text='Список постов пока пуст'
							imageName='posts-empty.svg'
						/>
					)}
				</>
			)}
		</>
	)
}
