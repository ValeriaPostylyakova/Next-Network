import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TUnreadMessage } from '../../../@types/unread-messages'

export class UnreadMessagesAction {
	getUnreadMessages = createAsyncThunk(
		'unreadMessages/fetchUnreadMessages',
		async (id: string | null) => {
			const { data } = await api.get<TUnreadMessage[]>(`/unreadMessages/${id}`)
			return data
		}
	)
}
