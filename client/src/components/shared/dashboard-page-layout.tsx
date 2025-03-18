'use client'

import useSocket from '@/hooks/use-socket'
import { FeedActions } from '@/redux/feed/async-actions'
import { FriendsSuggestionActions } from '@/redux/friends/async-actions'
import { FetchAuth } from '@/redux/profile/async-actions'
import { setUser } from '@/redux/profile/auth-slice'
import { AppDispatch, RootState } from '@/redux/store'
import { StoriesActions } from '@/redux/stories/async-actions'
import { UnreadMessagesAction } from '@/redux/unreadMessages/async-actions'
import Box from '@mui/material/Box'
import { PagesTopLoader } from 'nextjs-toploader/pages'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarLeft } from './sidebar-left'
import { SidebarRight } from './sidebar-right'

interface Props {
	children: ReactNode
}

const fetchAuth = new FetchAuth()
const friendsSuggestion = new FriendsSuggestionActions()
const storiesActions = new StoriesActions()
const feedActions = new FeedActions()
const unreadMessagesActions = new UnreadMessagesAction()

export const DashboardPageLayout: FC<Props> = ({ children }) => {
	const [isClient, setIsClient] = useState(false)
	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.profile)
	const status = useSelector((state: RootState) => state.auth.status)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const id = String(profile.id)
	const socket = useSocket(`${process.env.API_URL}`, id)

	useEffect(() => {
		if (isClient && localStorage.getItem('token')) {
			dispatch(fetchAuth.checkAuth())
		}
		if (status === 'success' && isClient) {
			localStorage.setItem('userId', String(profile.id))
		}

		dispatch(friendsSuggestion.getFriendsSuggestion())
		dispatch(feedActions.getFeed())
		dispatch(storiesActions.getStories())
		dispatch(unreadMessagesActions.getUnreadMessages(id))
	}, [isClient])

	useEffect(() => {
		socket?.on('resOnlineUsers', data => {
			dispatch(setUser(data))

			return () => {
				socket.off('resOnlineUsers')
				socket.disconnect()
			}
		})
	}, [socket, dispatch])

	return (
		<Box sx={{ display: 'flex', color: 'text.primary' }}>
			<PagesTopLoader color='#00578a' />
			<SidebarLeft />
			{children}
			<SidebarRight />
		</Box>
	)
}
