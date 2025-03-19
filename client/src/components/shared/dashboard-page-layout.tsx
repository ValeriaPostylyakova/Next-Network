'use client'

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
import { io, Socket } from 'socket.io-client'
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
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const id = String(profile.id)

	useEffect(() => {
		const newSocket = io(process.env.API_URL)
		setSocket(newSocket)

		newSocket.on('connect', () => {
			if (id !== undefined) {
				newSocket.emit('onlineUsers', id)
			}
		})
	}, [status])

	useEffect(() => {
		if (isClient && localStorage.getItem('token')) {
			dispatch(fetchAuth.checkAuth())
		}
		if (status === 'success' && isClient) {
			localStorage.setItem('userId', String(profile.id))
			dispatch(unreadMessagesActions.getUnreadMessages(String(profile.id)))
		}

		dispatch(friendsSuggestion.getFriendsSuggestion())
		dispatch(feedActions.getFeed())
		dispatch(storiesActions.getStories())
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
