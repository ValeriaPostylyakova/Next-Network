import Box from '@mui/material/Box'
import { FC } from 'react'
import { MainBlock } from '../ui'
import { StoryBlock } from './story-block'

export interface Props {
	className?: string
}

export const StoriesBlock: FC<Props> = () => {
	return (
		<MainBlock>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '1rem',
					overflowY: 'auto',
					scrollbarWidth: 'thin',
				}}
			>
				{Array.from({ length: 8 }).map((_, index) => (
					<StoryBlock key={index} />
				))}
			</Box>
		</MainBlock>
	)
}
