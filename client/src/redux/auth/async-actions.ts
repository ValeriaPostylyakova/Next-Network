import { API_URL } from '@/http/axios'
import { AuthResponse, AuthService } from '@/services/auth-service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TParamsRegistration = {
	email: string
	password: string
	firstname: string
	lastname: string
}

type TParamsLogin = {
	email: string
	password: string
}

export class FetchAuth {
	registration = createAsyncThunk(
		'auth/fetchRegister',
		async (params: TParamsRegistration) => {
			const { email, password, firstname, lastname } = params
			const { data } = await AuthService.registration(
				email,
				password,
				firstname,
				lastname
			)
			localStorage.setItem('token', data.accessToken)
			return data
		}
	)
	login = createAsyncThunk('auth/fetchLogin', async (params: TParamsLogin) => {
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
