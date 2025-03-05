import { api, API_URL } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TProfile } from '../../../@types/profile'
import {
	TParams,
	TParamsEmail,
	TParamsLogin,
	TParamsPhone,
	TParamsRegistration,
} from './types'

export class FetchAuth {
	registration = createAsyncThunk(
		'auth/fetchRegister',
		async (params: TParamsRegistration) => {
			const { email, password, firstname, lastname } = params
			const { data } = await api.post('/registration', {
				email,
				password,
				firstname,
				lastname,
			})

			localStorage.setItem('token', data.accessToken)
			localStorage.setItem('userId', data.id)
			return data
		}
	)
	login = createAsyncThunk(
		'user/fetchLogin',
		async (params: TParamsLogin, { rejectWithValue }) => {
			const { email, password } = params

			try {
				const response = await api.post('/login', { email, password })

				if (response.status !== 200) {
					throw new Error('Network response was not ok')
				}

				return response.data
			} catch (error: any) {
				return rejectWithValue(error.response.data.message)
			}
		}
	)

	logout = createAsyncThunk('user/fetchLogout', async () => {
		await api.post('/logout')
		localStorage.removeItem('token')
	})

	checkAuth = createAsyncThunk('user/checkAuth', async () => {
		const { data } = await axios.get(`${API_URL}/refresh`, {
			withCredentials: true,
		})
		localStorage.setItem('token', data.accessToken)
		return data
	})

	getProfile = createAsyncThunk('user/fetchProfile', async () => {
		const { data } = await api.get<TProfile>('/profile/')
		return data
	})

	updateProfile = createAsyncThunk(
		'user/fetchUpdateUser',
		async (params: TParams) => {
			const { id, firstname, lastname, identifier, jobTitle } = params
			const { data } = await api.patch<TProfile>(`/updateProfile`, {
				id,
				firstname,
				lastname,
				jobTitle,
				identifier,
			})
			return data
		}
	)

	updateProfileEmail = createAsyncThunk(
		'user/fetchUpdateUserEmail',
		async (params: TParamsEmail) => {
			const { id, email } = params
			const { data } = await api.patch<TProfile>(`/updateProfileEmail`, {
				id,
				email,
			})
			return data
		}
	)

	updateProfilePhone = createAsyncThunk(
		'user/fetchUpdateUserPhone',
		async (params: TParamsPhone) => {
			const { id, phone } = params
			const { data } = await api.patch<TProfile>(`/updateProfilePhone`, {
				id,
				phone,
			})
			return data
		}
	)

	updateProfileImageUrl = createAsyncThunk(
		'user/fetchUpdateUserImage',
		async (formData: FormData) => {
			const { data } = await api.patch<TProfile>(
				`/updateProfileImageUrl`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			return data
		}
	)

	deleteAvatar = createAsyncThunk(
		'user/fetchDeleteAvatar',
		async (id: number) => {
			const { data } = await api.patch<TProfile>(`/avatar/${id}`)
			return data
		}
	)
}
