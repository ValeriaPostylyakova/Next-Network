import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../auth/types'
import { CommentsActions } from './async-actions'
import { InitialState } from './type'

const commentsActions = new CommentsActions()

const initialState: InitialState = {
	comments: [],
	statusComments: Status.LOADIND,
	statusCreateComment: Status.LOADIND,
}

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(commentsActions.createComment.pending, state => {
			state.statusCreateComment = Status.LOADIND
		})

		builder.addCase(
			commentsActions.createComment.fulfilled,
			(state, actions) => {
				state.statusCreateComment = Status.SUCCESS
				state.comments.push(actions.payload)
			}
		)

		builder.addCase(commentsActions.createComment.rejected, state => {
			state.statusCreateComment = Status.ERROR
		})
	},
})

export default commentsSlice.reducer
