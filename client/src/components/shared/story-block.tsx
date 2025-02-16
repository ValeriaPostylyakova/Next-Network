'use client'

import { Avatar } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { StoryItem } from '../../../@types/post'

export interface Props {
	imageUrl: string
	fullname: string
	items: StoryItem[]
	setOpen: (value: boolean) => void
	setSelectedStory: (value: StoryItem[]) => void
}

export const StoryBlock: FC<Props> = ({
	imageUrl,
	items,
	fullname,
	setOpen,
	setSelectedStory,
}) => {
	const onClickStory = (story: StoryItem[]) => {
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
				<Avatar
					component='div'
					alt='avatar'
					src={imageUrl ? imageUrl : '/images/user-profile.svg'}
					sx={{
						width: 70,
						height: 70,
						mb: 1,
						border: '2px solid #ffffff',
					}}
				/>
			</button>
			<Typography sx={{ fontSize: '13px', color: '#7e7e7e' }}>
				{fullname}
			</Typography>
		</Box>
	)
}
