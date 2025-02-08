'use client'

import data, { Emoji } from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import Box from '@mui/material/Box'
import { Dispatch, FC, SetStateAction } from 'react'

export interface Props {
	setValue: Dispatch<SetStateAction<string>>
}

export const EmojiBlock: FC<Props> = ({ setValue }) => {
	const addEmoji = (emoji: Emoji) => {
		setValue((value: string) => value + emoji.native)
	}

	return (
		<Box
			sx={{
				position: 'absolute',
				top: '100%',
				right: 0,
				zIndex: 1000,
			}}
		>
			<Picker
				emojiSize={20}
				emojiButtonSize={28}
				data={data}
				onEmojiSelect={addEmoji}
				maxFrequentRows={0}
				locale='ru'
				theme='dark'
			/>
		</Box>
	)
}
