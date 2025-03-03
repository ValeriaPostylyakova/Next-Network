import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TMessage } from '../../../@types/chat'
import { Status } from '../../../@types/fetchStatus'
import { MessagesActions } from './async-actions'
import { InitialState } from './types'

const messagesAction = new MessagesActions()

const initialState: InitialState = {
	messages: [],
	statusMessage: Status.LOADIND,
}

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages(state, action: PayloadAction<TMessage>) {
			state.messages.push(action.payload)
		},

		updateStateMessages(state, action: PayloadAction<any[]>) {
			state.messages = action.payload
		},

		deleteMessage(state, action: PayloadAction<number>) {
			state.messages = state.messages.filter(
				message => message.id !== action.payload
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(messagesAction.getMessages.pending, state => {
				state.statusMessage = Status.LOADIND
			})
			.addCase(messagesAction.getMessages.fulfilled, (state, action) => {
				state.statusMessage = Status.SUCCESS
				state.messages = action.payload
			})
			.addCase(messagesAction.getMessages.rejected, (state, action) => {
				state.statusMessage = Status.ERROR
			})

			.addCase(messagesAction.deleteMessage.pending, state => {
				state.statusMessage = Status.LOADIND
			})
			.addCase(messagesAction.deleteMessage.fulfilled, (state, action) => {
				state.statusMessage = Status.SUCCESS
			})
			.addCase(messagesAction.deleteMessage.rejected, (state, action) => {
				state.statusMessage = Status.ERROR
			})
	},
})

export const { setMessages, deleteMessage, updateStateMessages } =
	messagesSlice.actions

export default messagesSlice.reducer
