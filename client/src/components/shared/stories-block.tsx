'use client'

import { RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { TStory, TStoryItem } from '../../../@types/stories'
import { MainBlock } from '../ui'
import { CreateStoryBlock } from './create-story-block'
import { StoryBlock } from './story-block'
import { StoryBlockContainer } from './story-block-container'

export interface Props {
	stories: TStory[]
}

export const StoriesBlock: FC<Props> = ({ stories }) => {
	const [open, setOpen] = useState(false)
	const [selectedStory, setSelectedStory] = useState<TStoryItem[]>([])
	const profile = useSelector((state: RootState) => state.auth.profile)

	return (
		<>
			<MainBlock>
				<Box
					component='div'
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
						overflowY: 'auto',
						scrollbarWidth: 'thin',
						py: 1.5,
						px: 2,
					}}
				>
					{stories.map((story, index) => (
						<StoryBlock
							setSelectedStory={setSelectedStory}
							setOpen={setOpen}
							key={index}
							{...story}
						/>
					))}
					<CreateStoryBlock />
				</Box>
			</MainBlock>
			{open && (
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						bgcolor: 'rgba(0, 0, 0, 0.8)',
						zIndex: 100,
					}}
				>
					<StoryBlockContainer
						setOpen={setOpen}
						selectedStory={selectedStory}
					/>
				</Box>
			)}
		</>
	)
}
