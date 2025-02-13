import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class ChatActions {
	getChats = createAsyncThunk('chats/fetchChats', async (id: string) => {
		const { data } = await api.get(`/chats/${id}`)
		return data
	})
}
