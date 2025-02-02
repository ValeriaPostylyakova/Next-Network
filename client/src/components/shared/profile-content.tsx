'use client'

import Box from '@mui/material/Box'

import { PostActions } from '@/redux/post/async-action'
import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostSkeleton } from '../ui/post-skeleton'
import { ProfileSkeleton } from '../ui/profile-skeleton'
import { BlockEmpty } from './block-empty'
import { PostBlock } from './post-block'
import { ProfileInfoBlock } from './profile-info-block'

export interface Props {
	id: string
}

export const ProfileContent: FC<Props> = ({ id }) => {
	const profileActions = new ProfileActions()
	const postActions = new PostActions()

	const dispatch: AppDispatch = useDispatch()
	const profileIfo = useSelector(
		(state: RootState) => state.profile.profileInfo
	)
	const posts = useSelector((state: RootState) => state.post.posts)
	const postsStatus = useSelector((state: RootState) => state.post.statusPosts)
	const profileStatus = useSelector(
		(state: RootState) => state.profile.statusProfileInfo
	)

	useEffect(() => {
		async function fetchProfileData() {
			await dispatch(profileActions.profile(id))
			await dispatch(postActions.posts(id))
		}

		fetchProfileData()
	}, [dispatch])

	return (
		<>
			{profileStatus === 'loading' ? (
				<ProfileSkeleton />
			) : (
				<ProfileInfoBlock profileInfo={profileIfo} />
			)}
			{postsStatus === 'loading' ? (
				[...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
			) : (
				<>
					{posts.length > 0 ? (
						<Box sx={{ width: '100%', mt: 5 }}>
							{posts?.map(post => (
								<PostBlock key={post.id} {...post} />
							))}
						</Box>
					) : (
						<BlockEmpty
							text='Список постов пока пуст'
							imageName='posts-empty.png'
						/>
					)}
				</>
			)}
		</>
	)
}
