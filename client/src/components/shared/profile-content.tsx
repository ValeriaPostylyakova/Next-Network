'use client'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from 'next/link'

import { PostActions } from '@/redux/post/async-action'
import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonUI } from '../ui'
import { PostBlock } from './post-block'
import { UserInfoName } from './user-info-name'

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
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					pb: 1,
				}}
			>
				<UserInfoName
					text={profileIfo?.jobTitle}
					width={80}
					height={80}
					image='/user-profile.svg'
					sizeTitle={20}
					sizeSubTitle={16}
					name={profileIfo?.fullname}
				/>
				<Link href='/settings'>
					<ButtonUI variant='outlined'>Редактировать профиль</ButtonUI>
				</Link>
			</Box>
			<Divider />
			<Box sx={{ width: '100%', mt: 5 }}>
				{posts?.map(post => (
					<PostBlock key={post.id} {...post} />
				))}
			</Box>
		</>
	)
}
