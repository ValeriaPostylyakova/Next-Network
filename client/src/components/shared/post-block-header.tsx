import Box from '@mui/material/Box'

import { FC } from 'react'
import { UserInfoName } from './user-info-name'

export interface Props {
	fullname?: string
	jobTitle?: string
	userImageUrl?: string
}

export const PostBlockHeader: FC<Props> = ({
	fullname,
	jobTitle,
	userImageUrl,
}) => {
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
				text={jobTitle}
				width={55}
				height={55}
				image='/user-profile.svg'
				sizeTitle={18}
				sizeSubTitle={15}
				name={fullname}
			/>
		</Box>
	)
}
