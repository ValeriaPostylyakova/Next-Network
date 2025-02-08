import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class UserActions {
	getUser = createAsyncThunk('user/fetchUser', async (id: string) => {
		const { data } = await api.get(`/user/${id}`)
		return data
	})
}
