'use client'

import Box from '@mui/material/Box'
import { X } from 'lucide-react'
import { FC, useRef } from 'react'
import Stories from 'react-insta-stories'
import { useClickAway } from 'react-use'
import { StoryItem } from '../../../@types/post'

export interface Props {
	setOpen: (value: boolean) => void
	selectedStory: StoryItem[]
}

export const StoryBlockContainer: FC<Props> = ({ setOpen, selectedStory }) => {
	const ref = useRef(null)
	useClickAway(ref, () => {
		setOpen(false)
	})

	return (
		<Box
			ref={ref}
			sx={{
				position: 'relative',
				zIndex: 100,
				top: 20,
				width: 500,
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
			<Stories
				stories={selectedStory.map(item => ({
					url: item.imageUrl,
				}))}
				onAllStoriesEnd={() => setOpen(false)}
				defaultInterval={3000}
				width={520}
				height={800}
			/>
		</Box>
	)
}
