import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export type TParams = {
	profileId: string
	userId: string
}

export class ChatActions {
	getChats = createAsyncThunk('chats/fetchChats', async (id: string) => {
		const { data } = await api.get(`/chats/${id}`)
		return data
	})

	getChat = createAsyncThunk('chats/fetchChat', async (params: TParams) => {
		const { data } = await api.get(
			`/chat?profileId=${params.profileId}&userId=${params.userId}`
		)
		return data
	})
}
