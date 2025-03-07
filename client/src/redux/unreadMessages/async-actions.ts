import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class UnreadMessagesAction {
	getUnreadMessages = createAsyncThunk(
		'unreadMessages/fetchUnreadMessages',
		async (id: string) => {
			const { data } = await api.get(`/unreadMessages/${id}`)
			return data
		}
	)
}
