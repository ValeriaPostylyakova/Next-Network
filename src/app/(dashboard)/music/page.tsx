import { MainWrapper } from '@/components/ui/main-wrapper'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={0}>
			<Box sx={{ width: '95%', m: '0 auto', pt: 3 }}>
				<Typography variant='h2'>Music</Typography>
			</Box>
		</MainWrapper>
	)
}

export default Page
