import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class MessagesActions {
	getMessages = createAsyncThunk(
		'messages/fetchMessages',
		async (id: string) => {
			const { data } = await api.get(`/messages/${id}`)
			return data
		}
	)

	deleteMessage = createAsyncThunk(
		'messages/fetchDeleteMessage',
		async (id: string) => {
			const { data } = await api.delete(`/deleteMessage/${id}`)
			return data
		}
	)
}
