'use client'

import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { SendHorizontal, Smile } from 'lucide-react'

import { Dispatch, FC, SetStateAction, useState } from 'react'
import { FlexContainer } from '../ui'
import { EmojiBlock } from './emoji-block'

export interface Props {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	handleInputValue: (e: any) => void
}

export const ChatFooter: FC<Props> = ({
	value,
	setValue,
	handleInputValue,
}) => {
	const [smileOpen, setSmileOpen] = useState<boolean>(false)

	return (
		<>
			<Box
				sx={{
					width: '50%',
					m: '0 auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={[
						theme => ({
							bgcolor: '#101010',
							borderRadius: '10px 10px 0px 10px',
							pr: 2,
							display: 'flex',
							alignItems: 'center',
							width: '100%',
						}),
						theme =>
							theme.applyStyles('light', {
								backgroundColor: '#eee',
							}),
						theme =>
							theme.applyStyles('dark', {
								backgroundColor: '#272727',
							}),
					]}
				>
					<Button onClick={() => setSmileOpen(!smileOpen)}>
						<Smile />
					</Button>
					<TextField
						autoComplete='off'
						placeholder='Сообщение'
						sx={{
							width: '100%',
							'& fieldset': { border: 'none' },
						}}
						value={value}
						onChange={e => setValue(e.target.value)}
						onKeyDown={e => handleInputValue(e)}
					/>
					<FlexContainer>
						<button
							onClick={e => handleInputValue(e)}
							style={{
								color: '#5142f5',
							}}
						>
							<SendHorizontal />
						</button>
					</FlexContainer>
				</Box>
			</Box>

			{smileOpen && <EmojiBlock setValue={setValue} top='52.5%' left='0%' />}
		</>
	)
}
