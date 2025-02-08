'use client'

import { AppDispatch, RootState } from '@/redux/store'
import { UserActions } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostSkeleton } from '../ui/post-skeleton'
import { BlockEmpty } from './block-empty'
import { PostBlock } from './post-block'
import { ProfileInfoBlock } from './profile-info-block'

export interface Props {
	id: string
}

export const UserContent: FC<Props> = ({ id }) => {
	const profileActions = new UserActions()
	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.user.profile)
	const status = useSelector((state: RootState) => state.user.statusProfile)

	useEffect(() => {
		dispatch(profileActions.getUser(id))
	}, [dispatch])

	return (
		<>
			<ProfileInfoBlock profileInfo={profile} />
			{status === 'loading' ? (
				[...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
			) : (
				<>
					{profile.posts.length > 0 ? (
						<Box sx={{ width: '100%', mt: 5 }}>
							{profile.posts?.map(post => (
								<PostBlock key={post.id} {...post} />
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
