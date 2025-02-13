import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { ChatActions } from './async-actions'
import { InitialState } from './types'

const chatsActions = new ChatActions()

const initialState: InitialState = {
	chats: [],
	statusChats: Status.LOADIND,
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
	},
})

export default chatsSlice.reducer
