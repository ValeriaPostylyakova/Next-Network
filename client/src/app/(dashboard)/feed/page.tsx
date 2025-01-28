'use client'

import { Header } from '@/components/shared'
import { MainWrapper } from '@/components/ui/main-wrapper'
import { FetchAuth } from '@/redux/auth/async-actions'
import { AppDispatch } from '@/redux/store'
import Box from '@mui/material/Box'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	const fetchAuth = new FetchAuth()
	const dispatch: AppDispatch = useDispatch()
	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchAuth.checkAuth())
		}
	}, [])
	return (
		<MainWrapper mt={65}>
			<Box sx={{ width: '95%', m: '0 auto', pt: 3 }}>
				<Header />
				{/* <StoriesBlock /> */}
				{/* <PostBlock />
				<PostBlock />
				<PostBlock /> */}
			</Box>
		</MainWrapper>
	)
}

export default Page
