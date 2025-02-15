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
	},
})

export const { setMessages } = messagesSlice.actions

export default messagesSlice.reducer
