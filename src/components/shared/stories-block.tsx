import { FC } from 'react'
import { FlexContainer, MainBlock } from '../ui'
import { StoryBlock } from './story-block'

export interface Props {
	className?: string
}

export const StoriesBlock: FC<Props> = () => {
	return (
		<MainBlock>
			<FlexContainer>
				{Array.from({ length: 12 }).map((_, index) => (
					<StoryBlock key={index} />
				))}
			</FlexContainer>
		</MainBlock>
	)
}
