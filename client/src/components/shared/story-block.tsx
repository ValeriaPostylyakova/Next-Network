'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { StoryItem } from '../../../@types/post'
import { AvatarUI } from '../ui'

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
				<AvatarUI width={70} imageUrl={imageUrl} />
			</button>
			<Typography sx={{ fontSize: '13px', color: '#7e7e7e' }}>
				{fullname}
			</Typography>
		</Box>
	)
}
