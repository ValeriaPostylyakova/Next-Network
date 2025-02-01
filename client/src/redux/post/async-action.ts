import { PostService } from '@/services/post-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

type TParams = {
	id: number
	username: string
	userImgUrl?: string
	text: string
}

export class PostActions {
	createPost = createAsyncThunk(
		'post/fetchCreatePost',
		async (formData: FormData) => {
			const { data } = await PostService.createPost(formData)
			return data
		}
	)

	posts = createAsyncThunk('post/fetchPosts', async (id: string) => {
		const { data } = await PostService.posts(id)
		return data
	})

	deletePost = createAsyncThunk('post/deletePost', async (id: number) => {
		const { data } = await PostService.deletePost(id)
		return data
	})

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

	createComment = createAsyncThunk(
		'comments/fetchCreateComment',
		async (params: TParams) => {
			const { id, username, userImgUrl, text } = params

			const { data } = await PostService.createComment(
				id,
				username,
				userImgUrl,
				text
			)

			return data
		}
	)
}
