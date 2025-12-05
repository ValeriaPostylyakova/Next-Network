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
		builder.addCase(storiesActions.createStory.pending, state => {
			state.status = Status.LOADIND
		})

		builder.addCase(storiesActions.createStory.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
			const findStory = state.stories.find(
				story => story.userId === action.payload.userId
			)

			if (findStory) {
				findStory.items = action.payload.items
				return
			}

			state.stories.push(action.payload)
		})

		builder.addCase(storiesActions.createStory.rejected, state => {
			state.status = Status.ERROR
		})

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
