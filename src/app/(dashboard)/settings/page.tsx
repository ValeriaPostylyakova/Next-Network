import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={0}>
			<Box
				sx={{
					width: '70%',
					m: '0 auto',
					pt: 3,
					display: 'flex',
					flexDirection: 'column',
				}}
			></Box>
		</MainWrapper>
	)
}

export default Page
