import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TProfile } from '../../../@types/profile'

export class UserActions {
	getUser = createAsyncThunk('user/fetchUser', async (id: string) => {
		const { data } = await api.get<TProfile>(`/user/${id}`)
		return data
	})
}
