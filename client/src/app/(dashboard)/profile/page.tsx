import { Header, PostBlock, UserInfoName } from '@/components/shared'
import { ButtonUI } from '@/components/ui'
import { MainWrapper } from '@/components/ui/main-wrapper'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
	className?: string
}

const Page: FC<Props> = () => {
	return (
		<MainWrapper mt={65}>
			<Box sx={{ width: '90%', m: '0 auto', pt: 3 }}>
				<Header />
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						pb: 1,
					}}
				>
					<UserInfoName
						text='Product Desiner, slohUI'
						width={80}
						height={80}
						image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
						sizeTitle={20}
						sizeSubTitle={16}
						name='X_AE_A-13'
					/>
					<Link href='/settings'>
						<ButtonUI variant='outlined'>Редактировать пррофиль</ButtonUI>
					</Link>
				</Box>
				<Divider />
				<Box sx={{ width: '100%', mt: 5 }}>
					<PostBlock />
					<PostBlock />
					<PostBlock />
				</Box>
			</Box>
		</MainWrapper>
	)
}

export default Page
