import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { TPost } from '../../../@types/post'
import { PostActions } from '../post/async-action'
import { FeedActions } from './async-actions'
import { InitialState } from './types'

const feedActions = new FeedActions()
const postActions = new PostActions()

const initialState: InitialState = {
	feed: [],
	statusComments: Status.LOADIND,
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

		builder.addCase(postActions.createComment.pending, state => {
			state.statusComments = Status.LOADIND
		})

		builder.addCase(postActions.createComment.fulfilled, (state, actions) => {
			state.statusComments = Status.SUCCESS
			state.feed
				.find((post: TPost) => post.id === actions.payload.postId)
				?.comments.push(actions.payload)
		})

		builder.addCase(postActions.createComment.rejected, state => {
			state.statusComments = Status.ERROR
		})
	},
})

export default feedSlice.reducer
