import Box from '@mui/material/Box'
import { FC } from 'react'
import { BlockEmpty, PostBlock } from '.'
import { Status } from '../../../@types/fetchStatus'
import { Post } from '../../../@types/post'
import { PostSkeleton } from '../ui/post-skeleton'

export interface Props {
	status: Status
	posts: Post[]
	visibleMenu: boolean
}

export const PostState: FC<Props> = ({ status, posts, visibleMenu }) => {
	return (
		<>
			{status === 'loading' ? (
				[...new Array(2)].map((_, index) => <PostSkeleton key={index} />)
			) : (
				<>
					{posts.length > 0 ? (
						<Box sx={{ width: '100%', mt: 5 }}>
							{posts?.map(post => (
								<PostBlock visibleMenu={visibleMenu} key={post.id} {...post} />
							))}
						</Box>
					) : (
						<BlockEmpty
							text='Список постов пока пуст'
							imageName='posts-empty.svg'
						/>
					)}
				</>
			)}
		</>
	)
}
