import Box from '@mui/material/Box'

import { Trash } from 'lucide-react'
import { FC } from 'react'
import { MenuBlockButton } from './menu-block-button'
import { UserInfoName } from './user-info-name'

export interface Props {
	fullname?: string
	jobTitle?: string
	userImageUrl?: string
	deletePost: () => void
}

export const PostBlockHeader: FC<Props> = ({
	fullname,
	jobTitle,
	userImageUrl,
	deletePost,
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
				image={userImageUrl ? userImageUrl : '/user-profile.svg'}
				sizeTitle={18}
				sizeSubTitle={15}
				name={fullname}
			/>
			<MenuBlockButton
				ml={-9}
				icon={<Trash size={20} />}
				title='Удалить пост'
				handleClickItem={deletePost}
			/>
		</Box>
	)
}
