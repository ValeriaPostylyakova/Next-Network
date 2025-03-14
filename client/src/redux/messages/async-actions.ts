import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TMessage } from '../../../@types/chat'

export class MessagesActions {
	getMessages = createAsyncThunk(
		'messages/fetchMessages',
		async (id: string) => {
			const { data } = await api.get<TMessage[]>(`/messages/${id}`)
			return data
		}
	)

	deleteMessage = createAsyncThunk(
		'messages/fetchDeleteMessage',
		async (id: string) => {
			const { data } = await api.delete<TMessage>(`/deleteMessage/${id}`)
			return data
		}
	)
}
