import { API_URL } from '@/http/axios'
import { AuthResponse, UserService } from '@/services/user-service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {
	TParams,
	TParamsEmail,
	TParamsImage,
	TParamsLogin,
	TParamsPhone,
	TParamsRegistration,
} from './types'

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

	updateProfileEmail = createAsyncThunk(
		'user/fetchUpdateUserEmail',
		async (params: TParamsEmail) => {
			const { id, email } = params
			const { data } = await UserService.updateProfileInfoEMail(id, email)
			return data
		}
	)

	updateProfilePhone = createAsyncThunk(
		'user/fetchUpdateUserPhone',
		async (params: TParamsPhone) => {
			const { id, phone } = params
			const { data } = await UserService.updateProfileInfoPhone(id, phone)
			return data
		}
	)

	updateProfileImageUrl = createAsyncThunk(
		'user/fetchUpdateUserImage',
		async (params: TParamsImage) => {
			const { id, image } = params
			const { data } = await UserService.updateProfileImageUrl(id, image)
			return data
		}
	)
}
