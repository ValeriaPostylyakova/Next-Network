'use client'

import { FeedActions } from '@/redux/feed/async-actions'
import { FriendsSuggestionActions } from '@/redux/friends/async-actions'
import { FetchAuth } from '@/redux/profile/async-actions'
import { setUser } from '@/redux/profile/auth-slice'
import { AppDispatch, RootState } from '@/redux/store'
import { StoriesActions } from '@/redux/stories/async-actions'
import { UnreadMessagesAction } from '@/redux/unreadMessages/async-actions'
import Box from '@mui/material/Box'
import { unwrapResult } from '@reduxjs/toolkit'
import { PagesTopLoader } from 'nextjs-toploader/pages'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { io, Socket } from 'socket.io-client'
import { SidebarLeft } from './sidebar-left'
import { SidebarRight } from './sidebar-right'

interface Props {
	children: ReactNode
}

export const DashboardPageLayout: FC<Props> = ({ children }) => {
	const fetchAuth = new FetchAuth()
	const friendsSuggestion = new FriendsSuggestionActions()
	const storiesActions = new StoriesActions()
	const feedActions = new FeedActions()
	const unreadMessagesActions = new UnreadMessagesAction()

	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.profile)
	const status = useSelector((state: RootState) => state.auth.status)
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		async function getData() {
			try {
				const data = await dispatch(fetchAuth.checkAuth())
				const res = unwrapResult(data)
				dispatch(setUser(res.user))

				dispatch(unreadMessagesActions.getUnreadMessages(String(res.user.id)))

				dispatch(friendsSuggestion.getFriendsSuggestion())
				dispatch(feedActions.getFeed())
				dispatch(storiesActions.getStories())
			} catch (e) {
				console.error(e)
			}
		}

		getData()
	}, [dispatch])

	useEffect(() => {
		const newSocket = io(process.env.API_URL)
		setSocket(newSocket)

		newSocket.on('connect', () => {
			if (profile.id) {
				newSocket.emit('onlineUsers', profile.id)
			}
		})
	}, [status])

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
