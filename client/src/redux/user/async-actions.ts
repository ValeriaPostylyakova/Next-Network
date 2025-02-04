import { API_URL } from '@/http/axios'
import { AuthResponse, UserService } from '@/services/user-service'
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

export type TParams = {
	id: number
	firstname: string
	lastname: string
	identifier: string
	jobTitle: string
}

export class FetchAuth {
	registration = createAsyncThunk(
		'auth/fetchRegister',
		async (params: TParamsRegistration) => {
			const { email, password, firstname, lastname } = params
			const { data } = await UserService.registration(
				email,
				password,
				firstname,
				lastname
			)
			localStorage.setItem('token', data.accessToken)
			return data
		}
	)
	login = createAsyncThunk('user/fetchLogin', async (params: TParamsLogin) => {
		const { email, password } = params
		const { data } = await UserService.login(email, password)
		localStorage.setItem('token', data.accessToken)
		return data
	})
	logout = createAsyncThunk('user/fetchLogout', async () => {
		await UserService.logout()
		localStorage.removeItem('token')
	})

	checkAuth = createAsyncThunk('user/checkAuth', async () => {
		const { data } = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
			withCredentials: true,
		})
		localStorage.setItem('token', data.accessToken)
		return data
	})

	updateProfile = createAsyncThunk(
		'user/fetchUpdateUser',
		async (params: TParams) => {
			const { id, firstname, lastname, identifier, jobTitle } = params
			const { data } = await UserService.updateProfileInfo(
				id,
				firstname,
				lastname,
				jobTitle,
				identifier
			)
			return data
		}
	)
}
