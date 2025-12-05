import { ChatContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import { InferGetStaticPropsType } from 'next'
import { getServerSideProps } from 'next/dist/build/templates/pages'
import { FC } from 'react'

const Page: FC = async ({
	params,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
	const { chatId } = await params
	return (
		<MainWrapper mt={0}>
			<ChatContent id={chatId} />
		</MainWrapper>
	)
}

export default Page
