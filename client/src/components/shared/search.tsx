'use client'

import { UsersActions } from '@/redux/search/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { FC, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickAway, useDebounce } from 'react-use'
import { TProfile } from '../../../@types/profile'
import { UserInfoName } from './user-info-name'

export interface Props {
	width: number
	placeholder: string
}

export const HeaderSearch: FC<Props> = ({ width, placeholder }) => {
	const dispatch: AppDispatch = useDispatch()
	const usersActions = new UsersActions()
	const users = useSelector((state: RootState) => state.search.users)
	const [focused, setFocused] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<string>('')
	const ref = useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		() => {
			dispatch(usersActions.getUsers(searchValue))
		},
		250,
		[searchValue]
	)

	return (
		<Box
			sx={{
				position: 'relative',
				width: `${width}px`,
			}}
			ref={ref}
		>
			<TextField
				size='small'
				sx={{
					width: `${width}px`,
					outline: 'none',
					'.MuiOutlinedInput-root': {
						borderRadius: 5,
					},
				}}
				placeholder={placeholder}
				value={searchValue}
				onFocus={() => setFocused(true)}
				onChange={e => setSearchValue(e.target.value)}
			/>

			<Search
				style={{
					position: 'absolute',
					top: '50%',
					right: '10px',
					transform: 'translateY(-50%)',
					color: '#c2c2c2',
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: focused ? '110%' : '120%',
					left: '0',
					width: '100%',
					background: '#313131ff',
					transition: 'all 0.3s ease-in-out',
					borderRadius: '0.8rem',
					opacity: focused ? 1 : 0,
					zIndex: 100,
					p: 2,
				}}
			>
				<Box>
					{users.map((user: TProfile) => (
						<Link href={`/user/${user.id}`} key={user.id}>
							<UserInfoName
								mb={1.3}
								sizeTitle={14}
								image={
									user.imageUrl ? user.imageUrl : '/images/user-profile.svg'
								}
								sizeSubTitle={11}
								height={30}
								width={30}
								name={user.firstname + ' ' + user.lastname}
								text={`@${user.identifier}`}
							/>
						</Link>
					))}
				</Box>
			</Box>
		</Box>
	)
}
