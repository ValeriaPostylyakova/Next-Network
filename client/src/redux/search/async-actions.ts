import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class UsersActions {
	getUsers = createAsyncThunk('users/fetchUsers', async (value: string) => {
		const { data } = await api.get(`/?query=${value}`)
		return data
	})
}
