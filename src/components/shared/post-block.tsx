import { Box, Divider, Typography } from '@mui/material'
import { FC } from 'react'
import { MainBlock } from '../ui'
import { PostBlockHeader } from './post-block-header'

export interface Props {
	className?: string
}

export const PostBlock: FC<Props> = () => {
	return (
		<MainBlock>
			<PostBlockHeader />
			<Divider />
			<Box>
				<Typography sx={{ fontSize: '16px', pt: 2 }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
					debitis voluptate vero, praesentium voluptates cupiditate distinctio
					deserunt. Optio laudantium, pariatur sit distinctio laborum nobis quis
					minus. Eligendi, exercitationem aliquam. Ut, aperiam.
				</Typography>
			</Box>
		</MainBlock>
	)
}
