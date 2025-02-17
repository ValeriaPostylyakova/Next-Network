'use client'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI } from '../ui'
import { ProfileSkeleton } from '../ui/profile-skeleton'
import { PostState } from './post-state'
import { ProfileInfoBlock } from './profile-info-block'

export interface Props {
	id: string
}

export const ProfileContent: FC<Props> = ({ id }) => {
	const postActions = new PostActions()

	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.profile)
	const posts = useSelector((state: RootState) => state.post.posts)
	const postsStatus = useSelector((state: RootState) => state.post.statusPosts)
	const userStatus = useSelector((state: RootState) => state.auth.status)

	useEffect(() => {
		async function fetchProfileData() {
			dispatch(postActions.posts(id))
		}

		fetchProfileData()
	}, [dispatch])

	return (
		<>
			{userStatus === 'loading' ? (
				<ProfileSkeleton
					width={80}
					heightLineTop={25}
					widthLineTop={500}
					heightLineBottom={21}
					widthLineBottom={400}
					widthContainer='100vh'
				/>
			) : (
				<ProfileInfoBlock
					profileInfo={profile}
					children={
						<Link href={`/editProfile`}>
							<ButtonUI variant='outlined'>Редактировать профиль</ButtonUI>
						</Link>
					}
				/>
			)}
			<PostState status={postsStatus} posts={posts} visibleMenu={true} />
		</>
	)
}
