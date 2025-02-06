'use client'

import { SidebarLeft, SidebarRight } from '@/components/shared'
import { FriendsSuggestionActions } from '@/redux/friends/async-actions'
import { AppDispatch } from '@/redux/store'
import { FetchAuth } from '@/redux/user/async-actions'
import Box from '@mui/material/Box'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
	children: ReactNode
}

const DashboardPage: FC<Props> = ({ children }) => {
	const dispatch: AppDispatch = useDispatch()
	const fetchAuth = new FetchAuth()
	const friendsSuggestion = new FriendsSuggestionActions()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchAuth.checkAuth())
		}

		dispatch(friendsSuggestion.getFriendsSuggestion())
	}, [])

	return (
		<Box sx={{ display: 'flex', color: 'text.primary' }}>
			<SidebarLeft />
			{children}
			<SidebarRight />
		</Box>
	)
}

export default DashboardPage
