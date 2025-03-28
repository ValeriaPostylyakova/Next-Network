'use client'

import { FeedActions } from '@/redux/feed/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { StoriesActions } from '@/redux/stories/async-actions'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostSkeleton } from '../ui/post-skeleton'
import { PostBlock } from './post-block'
import { StoriesBlock } from './stories-block'

export const FeedContent: FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const stories = useSelector((state: RootState) => state.stories.stories)
	const statusStories = useSelector((state: RootState) => state.stories.status)
	const feed = useSelector((state: RootState) => state.feed.feed)
	const statusFeed = useSelector((state: RootState) => state.feed.status)

	useEffect(() => {
		const feedActions = new FeedActions()
		const storiesActions = new StoriesActions()

		dispatch(feedActions.getFeed())
		dispatch(storiesActions.getStories())
	}, [dispatch])

	return (
		<Box component='div'>
			{statusStories === 'success' && <StoriesBlock stories={stories} />}
			{statusFeed === 'loading'
				? [...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
				: feed?.map(post => (
						<PostBlock key={post.id} {...post} visibleMenu={false} />
				  ))}
		</Box>
	)
}
