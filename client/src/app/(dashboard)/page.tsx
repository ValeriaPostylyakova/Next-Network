'use client'

import { SidebarLeft, SidebarRight } from '@/components/shared'
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
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileId } from '../../../constants/profile'

interface Props {
	children: ReactNode
}

const fetchAuth = new FetchAuth()
const friendsSuggestion = new FriendsSuggestionActions()
const storiesActions = new StoriesActions()
const feedActions = new FeedActions()
const unreadMessagesActions = new UnreadMessagesAction()

const DashboardPage: FC<Props> = ({ children }) => {
	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.profile)
	const status = useSelector((state: RootState) => state.auth.status)

	const id = status === 'success' ? String(profile.id) : profileId
	const socket = useSocket(`${process.env.API_URL}`, id)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchAuth.checkAuth())
		}
		status === 'success' && localStorage.setItem('userId', String(profile.id))
		dispatch(friendsSuggestion.getFriendsSuggestion())
		dispatch(feedActions.getFeed())
		dispatch(storiesActions.getStories())
		dispatch(unreadMessagesActions.getUnreadMessages(id))
	}, [])

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

export default DashboardPage
