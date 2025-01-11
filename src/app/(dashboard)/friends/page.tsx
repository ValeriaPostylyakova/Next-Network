import { FriendBlock } from '@/components/shared'
import { HeaderSearch } from '@/components/shared/search'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={0}>
			<Box sx={{ width: '95%', m: '0 auto', pt: 3 }}>
				<HeaderSearch width={420} placeholder='Search for friends' />
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						mt: 10,
					}}
				>
					{[...new Array(7)].map((_, index) => (
						<FriendBlock key={index} />
					))}
				</Box>
			</Box>
		</MainWrapper>
	)
}

export default Page
