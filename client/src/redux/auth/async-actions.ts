import { AuthService } from '@/services/auth-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

type TParams = {
	email: string
	password: string
}

export const fetchRegistration = createAsyncThunk(
	'auth/fetchRegister',
	async (params: TParams) => {
		try {
			const { email, password } = params
			const { data } = await AuthService.registration(email, password)
			localStorage.setItem('token', data.accessToken)
			return data
		} catch (e) {
			console.error(e)
		}
	}
)

export const fetchLogin = createAsyncThunk(
	'auth/fetchRegister',
	async (params: TParams) => {
		try {
			const { email, password } = params
			const { data } = await AuthService.login(email, password)
			localStorage.setItem('token', data.accessToken)
			return data
		} catch (e) {
			console.error(e)
		}
	}
)

export const fetchLogout = createAsyncThunk('auth/fetchLogout', async () => {
	try {
		await AuthService.logout()
		localStorage.removeItem('token')
	} catch (e) {
		console.error(e)
	}
})
