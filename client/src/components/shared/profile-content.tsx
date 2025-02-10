'use client'

import Box from '@mui/material/Box'

import { PostActions } from '@/redux/post/async-action'
import { AppDispatch, RootState } from '@/redux/store'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI } from '../ui'
import { PostSkeleton } from '../ui/post-skeleton'
import { ProfileSkeleton } from '../ui/profile-skeleton'
import { BlockEmpty } from './block-empty'
import { PostBlock } from './post-block'
import { ProfileInfoBlock } from './profile-info-block'

export interface Props {
	id: string
}

export const ProfileContent: FC<Props> = ({ id }) => {
	const postActions = new PostActions()

	const dispatch: AppDispatch = useDispatch()
	const user = useSelector((state: RootState) => state.auth.user)
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
					profileInfo={user}
					children={
						<Link href={`/editProfile`}>
							<ButtonUI variant='outlined'>Редактировать профиль</ButtonUI>
						</Link>
					}
				/>
			)}
			{postsStatus === 'loading' ? (
				[...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
			) : (
				<>
					{posts.length > 0 ? (
						<Box sx={{ width: '100%', mt: 5 }}>
							{posts?.map(post => (
								<PostBlock visibleMenu={true} key={post.id} {...post} />
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
