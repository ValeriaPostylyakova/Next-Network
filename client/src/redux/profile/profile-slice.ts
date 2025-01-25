import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../auth/types'
import { ProfileActions } from './async-actions'
import { InitialState } from './types'

const profileActions = new ProfileActions()

const initialState: InitialState = {
	profileInfo: undefined,
	statusProfileInfo: Status.LOADIND,
	statusPosts: Status.LOADIND,
	posts: null,
	post: null,
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(profileActions.profile.pending, state => {
			state.statusProfileInfo = Status.LOADIND
		})
		builder.addCase(profileActions.profile.fulfilled, (state, actions) => {
			state.statusProfileInfo = Status.SUCCESS
			state.profileInfo = actions.payload
		})
		builder.addCase(profileActions.profile.rejected, state => {
			state.statusProfileInfo = Status.ERROR
		})
		builder.addCase(profileActions.posts.pending, state => {
			state.statusPosts = Status.LOADIND
		})
		builder.addCase(profileActions.posts.fulfilled, (state, action) => {
			state.statusPosts = Status.SUCCESS
			state.posts = action.payload
		})
		builder.addCase(profileActions.posts.rejected, state => {
			state.statusPosts = Status.ERROR
		})
	},
})

export default profileSlice.reducer
