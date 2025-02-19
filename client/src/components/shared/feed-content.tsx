'use client'

import { FeedActions } from '@/redux/feed/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostSkeleton } from '../ui/post-skeleton'
import { PostBlock } from './post-block'
import { StoriesBlock } from './stories-block'

export interface Props {
	className?: string
}

const feedActions = new FeedActions()

export const FeedContent: FC<Props> = () => {
	const dispatch: AppDispatch = useDispatch()
	const feed = useSelector((state: RootState) => state.feed.feed)
	const statusFeed = useSelector((state: RootState) => state.feed.status)
	const stories = useSelector((state: RootState) => state.stories.stories)
	const statusStories = useSelector((state: RootState) => state.stories.status)

	useEffect(() => {
		dispatch(feedActions.getFeed())
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
