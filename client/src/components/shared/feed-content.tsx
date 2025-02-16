'use client'

import { RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { PostSkeleton } from '../ui/post-skeleton'
import { PostBlock } from './post-block'
import { StoriesBlock } from './stories-block'

export interface Props {
	className?: string
}

export const FeedContent: FC<Props> = () => {
	const feed = useSelector((state: RootState) => state.feed.feed)
	const stories = useSelector((state: RootState) => state.stories.stories)
	const statusStories = useSelector((state: RootState) => state.stories.status)
	const statusFeed = useSelector((state: RootState) => state.feed.status)

	return (
		<Box component='div'>
			{statusFeed === 'loading'
				? [...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
				: feed?.posts.map(post => (
						<PostBlock key={post.id} {...post} visibleMenu={false} />
				  ))}
			{statusStories === 'success' && <StoriesBlock stories={stories} />}
		</Box>
	)
}
