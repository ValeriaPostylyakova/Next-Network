import { createSlice } from '@reduxjs/toolkit'
import { TFeed } from '../../../@types/feed'
import { Status } from '../../../@types/fetchStatus'
import { FeedActions } from './async-actions'
import { InitialState } from './types'

const feedActions = new FeedActions()

const initialState: InitialState = {
	feed: {} as TFeed,
	status: Status.LOADIND,
}

export const feedSlice = createSlice({
	name: 'feed',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(feedActions.getFeed.pending, state => {
			state.status = Status.LOADIND
		})

		builder.addCase(feedActions.getFeed.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			state.feed = action.payload
		})

		builder.addCase(feedActions.getFeed.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export default feedSlice.reducer
