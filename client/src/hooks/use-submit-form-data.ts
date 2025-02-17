'use client'

import { FetchAuth } from '@/redux/profile/async-actions'
import { AppDispatch, RootState } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

export const useSubmitFormData = () => {
	const router = useRouter()
	const dispatch: AppDispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.auth.profile)

	const status = useSelector((state: RootState) => state.auth.status)
	const fetchAuth = new FetchAuth()

	return {
		dispatch,
		profile,
		fetchAuth,
		router,
		status,
	}
}
