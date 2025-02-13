import { createSlice } from '@reduxjs/toolkit'
import { TChat } from '../../../@types/chat'
import { Status } from '../../../@types/fetchStatus'
import { ChatActions } from './async-actions'
import { InitialState } from './types'

const chatsActions = new ChatActions()

const initialState: InitialState = {
	chats: [],
	chat: {} as TChat,
	statusChats: Status.LOADIND,
	statusChat: Status.LOADIND,
}

export const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(chatsActions.getChats.pending, state => {
				state.statusChats = Status.LOADIND
			})
			.addCase(chatsActions.getChats.fulfilled, (state, action) => {
				state.statusChats = Status.SUCCESS
				state.chats = action.payload
			})
			.addCase(chatsActions.getChats.rejected, (state, action) => {
				state.statusChats = Status.ERROR
			})

			.addCase(chatsActions.getChat.pending, state => {
				state.statusChat = Status.LOADIND
			})
			.addCase(chatsActions.getChat.fulfilled, (state, action) => {
				state.statusChat = Status.SUCCESS
				state.chat = action.payload
			})
			.addCase(chatsActions.getChat.rejected, (state, action) => {
				state.statusChat = Status.ERROR
			})
	},
})

export default chatsSlice.reducer
