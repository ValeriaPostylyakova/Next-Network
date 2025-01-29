'use client'

import Box from '@mui/material/Box'

import { PostActions } from '@/redux/post/async-action'
import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

	useEffect(() => {
		async function fetchProfileData() {
			await dispatch(profileActions.profile(id)).then(() => {
				dispatch(postActions.posts(id))
			})
		}

		fetchProfileData()
	}, [dispatch])

	return (
		<>
			<ProfileInfoBlock profileInfo={profileIfo} />
			<Box sx={{ width: '100%', mt: 5 }}>
				{posts?.map(post => (
					<PostBlock key={post.id} {...post} />
				))}
			</Box>
		</>
	)
}
