import { Header, ProfileContent } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { InferGetStaticPropsType } from 'next'
import { getServerSideProps } from 'next/dist/build/templates/pages'
import { FC } from 'react'

const Page: FC = ({
	params,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
	const { id } = params
	return (
		<MainWrapper mt={65}>
			<Box sx={{ width: '90%', m: '0 auto', pt: 3 }}>
				<Header />
				<ProfileContent id={id} />
			</Box>
		</MainWrapper>
		
	)
}

export default Page
