import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { Heart, MessageSquareText, SendHorizontal, Smile } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI, FlexContainer, MainBlock } from '../ui'
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
				<Typography sx={{ fontSize: '16px', pt: 2, mb: 2 }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
					debitis voluptate vero, praesentium voluptates cupiditate distinctio
					deserunt. Optio laudantium, pariatur sit distinctio laborum nobis quis
					minus. Eligendi, exercitationem aliquam. Ut, aperiam.
				</Typography>
				<Box
					sx={{
						width: '100%',
						height: '450px',
						borderRadius: 4,
						mb: 2,
						backgroundImage:
							'url(https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '3rem',
						ml: -2,
						mb: 2,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Button>
							<Heart color='#d3d3d3' size={22} />
						</Button>
						<Typography sx={{ fontSize: '14px', fontWeight: 600, ml: -1.5 }}>
							12 Likes
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Button>
							<MessageSquareText color='#d3d3d3' size={22} />
						</Button>
						<Typography sx={{ fontSize: '14px', fontWeight: 600, ml: -1.5 }}>
							25 Comments
						</Typography>
					</Box>
				</Box>
				<Divider />
				<FlexContainer content='space-between' pt={2.5}>
					<FlexContainer>
						<Box
							sx={{
								borderRadius: '100%',
								p: 0.25,
								width: '45px',
								height: '45px',
								backgroundImage:
									'url(https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg)',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								mb: 1,
							}}
						/>
						<TextField
							size='small'
							sx={{
								width: '400px',
								outline: 'none',
								'.MuiOutlinedInput-root': {
									borderRadius: 5,
								},
							}}
							placeholder='Write your comment..'
						/>
					</FlexContainer>
					<Box sx={{ display: 'flex', gap: 0.5 }}>
						<ButtonUI variant='outlined'>
							<Smile />
						</ButtonUI>
						<ButtonUI variant='outlined'>
							<SendHorizontal />
						</ButtonUI>
					</Box>
				</FlexContainer>
			</Box>
		</MainBlock>
	)
}
