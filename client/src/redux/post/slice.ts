import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../auth/types'
import { PostActions } from './async-action'

const postActions = new PostActions()

const initialState = {
	post: null,
	statusLikes: Status.LOADIND,
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(postActions.updateLikes.pending, state => {
			state.statusLikes = Status.LOADIND
		})

		builder.addCase(postActions.updateLikes.fulfilled, state => {
			state.statusLikes = Status.SUCCESS
			state.post = state.post
		})

		builder.addCase(postActions.updateLikes.rejected, state => {
			state.statusLikes = Status.ERROR
		})
	},
})

export default postSlice.reducer
