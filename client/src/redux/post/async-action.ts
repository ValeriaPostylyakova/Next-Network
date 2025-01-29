import { PostService } from '@/services/post-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class PostActions {
	posts = createAsyncThunk('post/fetchPosts', async (id: string) => {
		const { data } = await PostService.posts(id)
		return data
	})

	createPost = createAsyncThunk(
		'post/fetchCreatePost',
		async (formData: FormData) => {
			const { data } = await PostService.createPost(formData)
			return data
		}
	)

	addLikes = createAsyncThunk('post/addPostLike', async (id: string) => {
		const { data } = await PostService.addLikes(id)
		return data
	})

	removeLikes = createAsyncThunk('post/removePostLike', async (id: string) => {
		const { data } = await PostService.removeLikes(id)
		console.log(data)
		return data
	})

	comments = createAsyncThunk('post/fetchComments', async (id: string) => {
		const { data } = await PostService.comments(id)
		return data
	})
}
