'use client'

import Box from '@mui/material/Box'
import { X } from 'lucide-react'
import { FC, useState } from 'react'
import ReactStories from 'react-insta-stories'
import { StoryItem, TStory } from '../../../@types/post'
import { MainBlock } from '../ui'
import { StoryBlock } from './story-block'

export interface Props {
	stories: TStory[]
}

export const StoriesBlock: FC<Props> = ({ stories }) => {
	const [open, setOpen] = useState(false)
	const [selectedStory, setSelectedStory] = useState<StoryItem[]>([])
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
					<Box
						sx={{
							position: 'relative',
							width: 520,
							m: '0 auto',
						}}
					>
						<button
							style={{
								position: 'absolute',
								right: '-2.5rem',
								top: '-1.5rem',
								zIndex: 30,
							}}
							onClick={() => setOpen(false)}
						>
							<X
								style={{
									position: 'absolute',
									top: 0,
									right: 0,
								}}
								size={24}
							/>
						</button>
						<ReactStories
							stories={selectedStory.map(item => ({
								url: item.imageUrl,
							}))}
							defaultInterval={3000}
							width={520}
							height={800}
						/>
					</Box>
				</Box>
			)}
		</>
	)
}
