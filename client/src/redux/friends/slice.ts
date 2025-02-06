import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { FriendsSuggestionActions } from './async-actions'
import { InitialState } from './types'

const friendsSuggestion = new FriendsSuggestionActions()

const initialState: InitialState = {
	friendsSuggestion: [],
	statusFriendsSuggestion: Status.LOADIND,
}

export const friendsSuggestionSlice = createSlice({
	name: 'friendsSuggestion',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(friendsSuggestion.getFriendsSuggestion.pending, state => {
			state.statusFriendsSuggestion = Status.LOADIND
		})

		builder.addCase(
			friendsSuggestion.getFriendsSuggestion.fulfilled,
			(state, action) => {
				state.statusFriendsSuggestion = Status.SUCCESS
				state.friendsSuggestion = action.payload
			}
		)

		builder.addCase(friendsSuggestion.getFriendsSuggestion.rejected, state => {
			state.statusFriendsSuggestion = Status.ERROR
		})
	},
})

export default friendsSuggestionSlice.reducer
