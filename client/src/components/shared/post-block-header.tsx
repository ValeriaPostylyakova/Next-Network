import Box from '@mui/material/Box'

import { Trash } from 'lucide-react'
import Link from 'next/link'
import { FC, RefObject } from 'react'
import { MenuBlockButton } from './menu-block-button'
import { UserInfoName } from './user-info-name'

export interface Props {
	fullname?: string
	jobTitle?: string
	userImageUrl?: string
	userId: number
	deletePost: () => void
	visibleMenu: RefObject<boolean>
}

export const PostBlockHeader: FC<Props> = ({
	fullname,
	jobTitle,
	userImageUrl,
	deletePost,
	visibleMenu,
	userId,
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
			<Link href={`/user/${userId}`}>
				<UserInfoName
					text={jobTitle}
					width={55}
					image={userImageUrl}
					sizeTitle={18}
					sizeSubTitle={15}
					name={fullname}
				/>
			</Link>
			{visibleMenu.current === true && (
				<MenuBlockButton
					ml={-9}
					icon={<Trash size={20} />}
					title='Удалить пост'
					handleClickItem={deletePost}
				/>
			)}
		</Box>
	)
}
