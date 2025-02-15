'use client'

import { SidebarLeft, SidebarRight } from '@/components/shared'
import { FriendsSuggestionActions } from '@/redux/friends/async-actions'
import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { PagesTopLoader } from 'nextjs-toploader/pages'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
	children: ReactNode
}

const DashboardPage: FC<Props> = ({ children }) => {
	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.user)
	const status = useSelector((state: RootState) => state.auth.status)
	const fetchAuth = new FetchAuth()
	const friendsSuggestion = new FriendsSuggestionActions()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchAuth.checkAuth())
		}
		status === 'success' && localStorage.setItem('userId', String(profile.id))
		dispatch(friendsSuggestion.getFriendsSuggestion())
	}, [])

	return (
		<Box sx={{ display: 'flex', color: 'text.primary' }}>
			<PagesTopLoader color='#0d80c2' />
			<SidebarLeft />
			{children}
			<SidebarRight />
		</Box>
	)
}

export default DashboardPage
