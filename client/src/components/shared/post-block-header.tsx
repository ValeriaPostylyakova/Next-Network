import Box from '@mui/material/Box'

import { EllipsisVertical } from 'lucide-react'
import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {
	className?: string
}

export const PostBlockHeader: FC<Props> = () => {
	return (
		<Box
			sx={{
				pb: 1,
				mb: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				cursor: 'pointer',
			}}
		>
			<UserInfoName
				text='Product Desiner, slohUI'
				width={55}
				height={55}
				image='https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg'
				sizeTitle={18}
				sizeSubTitle={15}
			/>
			<EllipsisVertical />
		</Box>
	)
}
