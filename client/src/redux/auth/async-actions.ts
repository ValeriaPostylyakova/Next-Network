import { API_URL } from '@/http/axios'
import { AuthResponse, AuthService } from '@/services/auth-service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TParams = {
	email: string
	password: string
	fullname?: string
}

export class FetchAuth {
	registration = createAsyncThunk(
		'auth/fetchRegister',
		async (params: TParams) => {
			const { email, password, fullname } = params
			const { data } = await AuthService.registration(email, password, fullname)
			localStorage.setItem('token', data.accessToken)
			return data
		}
	)
	login = createAsyncThunk('auth/fetchLogin', async (params: TParams) => {
		const { email, password } = params
		const { data } = await AuthService.login(email, password)
		localStorage.setItem('token', data.accessToken)
		return data
	})
	logout = createAsyncThunk('auth/fetchLogout', async () => {
		await AuthService.logout()
		localStorage.removeItem('token')
	})

	checkAuth = createAsyncThunk('auth/checkAuth', async () => {
		const { data } = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
			withCredentials: true,
		})
		localStorage.setItem('token', data.accessToken)
		return data
	})
}
