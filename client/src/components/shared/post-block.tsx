import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import { Comments } from '@/redux/profile/types'
import { FC } from 'react'
import { MainBlock } from '../ui'
import { CommentsBlock } from './comments-block'
import { PostBlockHeader } from './post-block-header'
import { PostCommentsBlock } from './post-comments-block'
import { PostLikesBlock } from './post-likes-block'
import { PostWriteCommentsBlock } from './post-write-comments-block'

export interface Props {
	id: number
	text?: string
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	likes: number
	like: boolean
	comments?: Comments[]
}

export const PostBlock: FC<Props> = ({
	id,
	text,
	postImageUrl,
	fullname,
	likes,
	like,
	comments,
	jobTitle,
	userImageUrl,
}) => {
	return (
		<MainBlock>
			<PostBlockHeader
				fullname={fullname}
				jobTitle={jobTitle}
				userImageUrl={userImageUrl}
			/>
			<Divider />
			<Box>
				<Typography sx={{ fontSize: '16px', pt: 2, mb: 2 }}>{text}</Typography>
				{postImageUrl && (
					<Box
						sx={{
							width: '100%',
							height: '450px',
							borderRadius: 4,
							mb: 2,
							backgroundImage: `url(${postImageUrl})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					/>
				)}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '3rem',
						ml: -2,
						mb: 2,
					}}
				>
					<PostLikesBlock id={id} likes={likes} like={like} />
					<PostCommentsBlock comments={comments} />
				</Box>
				<Divider />
				<Box sx={{ py: 2 }}>
					<Box>
						{comments?.map(comment => (
							<CommentsBlock key={comment.id} {...comment} />
						))}
					</Box>
				</Box>
				<PostWriteCommentsBlock />
			</Box>
		</MainBlock>
	)
}
