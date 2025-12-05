'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { TStoryItem } from '../../../@types/stories'

export interface Props {
	imageUrl: string
	fullname: string
	items: TStoryItem[]
	setOpen: (value: boolean) => void
	setSelectedStory: (value: TStoryItem[]) => void
}

export const StoryBlock: FC<Props> = ({
	imageUrl,
	items,
	fullname,
	setOpen,
	setSelectedStory,
}) => {
	const onClickStory = (story: TStoryItem[]) => {
		setSelectedStory(story)

		if (story.length > 0) {
			setOpen(true)
		}
	}

	return (
		<Box
			component='div'
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<button onClick={() => onClickStory(items)}>
				<img
					src={
						imageUrl
							? imageUrl
							: 'https://lh4.googleusercontent.com/proxy/JUL2sr04ai9oOpfU9HTz2GbIN83QGc1gEc1895tqHl9253cFLtG3M7opUtHKYzMTZNoUTCSDerFNBBioPs1CG0rV_xY4jCYQA7Z__XzM3qojmvXZ3hG_Cfeu3oRI77gCfHvDeeMWPg'
					}
					alt='image-story'
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
						width: '100px',
						height: '150px',
						borderRadius: '7px',
					}}
				/>
			</button>
			<Typography sx={{ fontSize: '13px', color: '#7e7e7e' }}>
				{fullname}
			</Typography>
		</Box>
	)
}
