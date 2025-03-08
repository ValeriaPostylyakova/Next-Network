import { ChatContent } from '@/components/shared'
import Box from '@mui/material/Box'
import { FC } from 'react'

type Params = {
	chatId: string
}
interface Props {
	params: Params
}

const Page: FC<Props> = async ({ params }) => {
	const { chatId } = await params
	return (
		<Box
			sx={{
				width: 'calc(100% - 660px)',
				m: '0 auto',
				display: 'flex',
				flexGrow: 0,
				bgcolor: '#000000',
				position: 'relative',
				zIndex: 30,
			}}
		>
			<ChatContent id={chatId} />
		</Box>
	)
}

export default Page
