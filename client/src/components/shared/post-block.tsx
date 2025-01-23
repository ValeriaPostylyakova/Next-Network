import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { Heart, MessageSquareText, SendHorizontal, Smile } from 'lucide-react'
import { FC } from 'react'
import { ButtonUI, FlexContainer, MainBlock } from '../ui'
import { PostBlockHeader } from './post-block-header'

export interface Props {
	text?: string
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	likes: number
	comments?: string[]
}

export const PostBlock: FC<Props> = ({
	text,
	postImageUrl,
	fullname,
	likes,
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
							{likes} Likes
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '1.3rem',
							cursor: 'pointer',
						}}
					>
						<MessageSquareText color='#d3d3d3' size={22} />
						<Typography sx={{ fontSize: '14px', fontWeight: 600, ml: -1.5 }}>
							{comments?.length} Comments
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
								backgroundImage: 'url(/user-profile.svg)',
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
					<FlexContainer>
						<ButtonUI variant='outlined'>
							<Smile />
						</ButtonUI>
						<ButtonUI variant='outlined'>
							<SendHorizontal />
						</ButtonUI>
					</FlexContainer>
				</FlexContainer>
			</Box>
		</MainBlock>
	)
}
