import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TChat } from '../../../@types/chat'

export type TParams = {
	chatId: string
	profileId: string
}

export type TParamsCreateChat = {
	userId: string
	profileId: string
}

export class ChatActions {
	getChats = createAsyncThunk('chats/fetchChats', async (userId: number) => {
		const { data } = await api.get<TChat[]>(`/chats/${userId}`)
		return data
	})

	createChat = createAsyncThunk(
		'chats/fetchCreateChat',
		async (params: TParamsCreateChat) => {
			const { data } = await api.post<TChat>(`/createChat`, params)
			return data
		}
	)

	getChat = createAsyncThunk('chats/fetchChat', async (params: TParams) => {
		const { data } = await api.get<TChat>(
			`/chat?chatId=${params.chatId}&profileId=${params.profileId}`
		)
		return data
	})

	deleteChatEmpty = createAsyncThunk(
		'chats/fetchDeleteChatEmpty',
		async (id: string) => {
			const { data } = await api.delete<TChat>(`/deleteChatEmpty/${id}`)
			return data
		}
	)

	deleteChat = createAsyncThunk('chats/fetchDeleteChat', async (id: string) => {
		const { data } = await api.delete<TChat>(`/deleteChat/${id}`)
		return data
	})
}
