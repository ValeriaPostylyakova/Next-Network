import { ChatContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
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
		<MainWrapper mt={0}>
			<ChatContent id={chatId} />
		</MainWrapper>
	)
}

export default Page
