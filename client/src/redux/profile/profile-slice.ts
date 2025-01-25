import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../auth/types'
import { ProfileActions } from './async-actions'
import { InitialState } from './types'

const profileActions = new ProfileActions()

const initialState: InitialState = {
	profileInfo: undefined,
	statusProfileInfo: Status.LOADIND,
	statusPosts: Status.LOADIND,
	statusCreatePost: Status.LOADIND,
	postImages: null,
	posts: null,
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setPostImages(state, action) {
			state.postImages = action.payload
		},
	},

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
		builder.addCase(profileActions.createPost.pending, state => {
			state.statusPosts = Status.LOADIND
		})
		builder.addCase(profileActions.createPost.fulfilled, (state, action) => {
			state.statusPosts = Status.SUCCESS
		})
		builder.addCase(profileActions.createPost.rejected, state => {
			state.statusPosts = Status.ERROR
		})
	},
})

export const { setPostImages } = profileSlice.actions
export default profileSlice.reducer
