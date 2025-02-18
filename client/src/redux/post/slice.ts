import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { Post } from '../../../@types/post'
import { PostActions } from './async-action'
import { InitialState } from './types'

const postActions = new PostActions()

const initialState: InitialState = {
	posts: [],
	statusPosts: Status.LOADIND,
	statusCreatePost: Status.LOADIND,
	statusDeletePost: Status.LOADIND,
	statusAddLike: Status.LOADIND,
	statusRemoveLike: Status.LOADIND,
	statusComments: Status.LOADIND,
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(postActions.createPost.pending, state => {
			state.statusCreatePost = Status.LOADIND
		})
		builder.addCase(postActions.createPost.fulfilled, (state, action) => {
			state.statusCreatePost = Status.SUCCESS
			state.posts.unshift(action.payload)
		})
		builder.addCase(postActions.createPost.rejected, state => {
			state.statusCreatePost = Status.ERROR
		})

		builder.addCase(postActions.posts.pending, state => {
			state.statusPosts = Status.LOADIND
		})
		builder.addCase(postActions.posts.fulfilled, (state, action) => {
			state.statusPosts = Status.SUCCESS
			state.posts = action.payload
		})
		builder.addCase(postActions.posts.rejected, state => {
			state.statusPosts = Status.ERROR
		})

		builder.addCase(postActions.addLikes.pending, state => {
			state.statusAddLike = Status.LOADIND
		})
		builder.addCase(postActions.addLikes.fulfilled, (state, action) => {
			state.statusAddLike = Status.SUCCESS
		})
		builder.addCase(postActions.addLikes.rejected, state => {
			state.statusAddLike = Status.ERROR
		})

		builder.addCase(postActions.removeLikes.pending, state => {
			state.statusRemoveLike = Status.LOADIND
		})
		builder.addCase(postActions.removeLikes.fulfilled, (state, action) => {
			state.statusRemoveLike = Status.SUCCESS
		})
		builder.addCase(postActions.removeLikes.rejected, state => {
			state.statusRemoveLike = Status.ERROR
		})

		builder.addCase(postActions.createComment.pending, state => {
			state.statusComments = Status.LOADIND
		})

		builder.addCase(postActions.createComment.fulfilled, (state, actions) => {
			state.statusComments = Status.SUCCESS
			state.posts
				.find((post: Post) => post.id === actions.payload.postId)
				?.comments.push(actions.payload)
		})

		builder.addCase(postActions.createComment.rejected, state => {
			state.statusComments = Status.ERROR
		})

		builder.addCase(postActions.deletePost.pending, state => {
			state.statusDeletePost = Status.LOADIND
		})

		builder.addCase(postActions.deletePost.fulfilled, (state, actions) => {
			state.statusDeletePost = Status.SUCCESS
			state.posts = state.posts.filter(
				(post: Post) => post.id !== actions.payload.id
			)
		})

		builder.addCase(postActions.deletePost.rejected, state => {
			state.statusDeletePost = Status.ERROR
		})

		builder.addCase(postActions.getFeed.pending, state => {
			state.statusPosts = Status.LOADIND
		})
		builder.addCase(postActions.getFeed.fulfilled, (state, action) => {
			state.statusPosts = Status.SUCCESS
			state.posts = action.payload
		})
		builder.addCase(postActions.getFeed.rejected, state => {
			state.statusPosts = Status.ERROR
		})
	},
})

export default postSlice.reducer
