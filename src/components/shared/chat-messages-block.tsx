'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC, useState } from 'react'

export interface Props {
	className?: string
}

export const ChatMessagesBlock: FC<Props> = () => {
	const [message, setMessage] = useState<string>('')
	return <div></div>
}
