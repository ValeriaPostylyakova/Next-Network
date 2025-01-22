'use client'

import { FetchAuth } from '@/redux/auth/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

export const useSubmitFormData = () => {
	const router = useRouter()
	const dispatch: AppDispatch = useDispatch()
	const user = useSelector((state: RootState) => state.auth.user)
	const status = useSelector((state: RootState) => state.auth.status)
	const fetchAuth = new FetchAuth()

	return {
		dispatch,
		user,
		fetchAuth,
		router,
		status,
	}
}
