import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TProfile } from '../../../@types/profile'

export class UsersActions {
	getUsers = createAsyncThunk('users/fetchUsers', async (value: string) => {
		const { data } = await api.get<TProfile[]>(`/?query=${value}`)
		return data
	})
}
