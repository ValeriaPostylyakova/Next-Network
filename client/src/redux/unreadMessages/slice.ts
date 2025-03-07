import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TMessage } from '../../../@types/chat'
import { Status } from '../../../@types/fetchStatus'
import { TUnreadMessage } from '../../../@types/unread-messages'
import { UnreadMessagesAction } from './async-actions'
import { InitialState } from './types'

const initialState: InitialState = {
	unreadMessages: [],
	status: Status.LOADIND,
}

const unreadMessagesAction = new UnreadMessagesAction()

export const unreadMessagesSlice = createSlice({
	name: 'unreadMessages',
	initialState,
	reducers: {
		setUnreadMessages: (state, action: PayloadAction<TUnreadMessage>) => {
			state.unreadMessages.push(action.payload)
		},

		deleteUnreadMessages: (state, action: PayloadAction<TMessage[]>) => {
			state.unreadMessages = []
		},
	},
	extraReducers: builder =>
		builder
			.addCase(unreadMessagesAction.getUnreadMessages.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(
				unreadMessagesAction.getUnreadMessages.fulfilled,
				(state, action) => {
					state.status = Status.SUCCESS
					state.unreadMessages = action.payload
				}
			)
			.addCase(
				unreadMessagesAction.getUnreadMessages.rejected,
				(state, action) => {
					state.status = Status.ERROR
				}
			),
})

export const { setUnreadMessages, deleteUnreadMessages } =
	unreadMessagesSlice.actions

export default unreadMessagesSlice.reducer
