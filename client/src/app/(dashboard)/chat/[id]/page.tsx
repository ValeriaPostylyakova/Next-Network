import { ChatContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import { FC } from 'react'

type Params = {
	id: string
}
interface Props {
	params: Params
}

export type TMessages = {
	sender: string
	text: string
}

const Page: FC<Props> = async ({ params }) => {
	const { id } = await params

	return (
		<MainWrapper mt={0}>
			<ChatContent id={id} />
		</MainWrapper>
	)
}

export default Page
