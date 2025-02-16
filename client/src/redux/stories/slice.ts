import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { StoriesActions } from './async-actions'
import { InitialState } from './types'

const storiesActions = new StoriesActions()

const initialState: InitialState = {
	stories: [],
	status: Status.LOADIND,
}

export const storiesSlice = createSlice({
	name: 'stories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(storiesActions.getStories.pending, state => {
			state.status = Status.LOADIND
		})

		builder.addCase(storiesActions.getStories.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			state.stories = action.payload
		})

		builder.addCase(storiesActions.getStories.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export default storiesSlice.reducer
