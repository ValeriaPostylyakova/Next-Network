import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '../../../@types/post'

type TParams = {
	postId: number
	text: string
}

export class PostActions {
	createPost = createAsyncThunk(
		'post/fetchCreatePost',
		async (formData: FormData) => {
			const { data } = await api.post<Post>('/post', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			return data
		}
	)

	posts = createAsyncThunk('post/fetchPosts', async (id: string) => {
		const { data } = await api.get<Post[]>(`/posts/${id}`)
		return data
	})

	deletePost = createAsyncThunk('post/deletePost', async (id: number) => {
		const { data } = await api.delete(`/postDelete/${id}`)
		return data
	})

	addLikes = createAsyncThunk('post/addPostLike', async (id: string) => {
		const { data } = await api.patch(`/addPostLike/${id}`)
		return data
	})

	removeLikes = createAsyncThunk('post/removePostLike', async (id: string) => {
		const { data } = await api.patch(`/removePostLike/${id}`)
		console.log(data)
		return data
	})

	comments = createAsyncThunk('post/fetchComments', async (id: string) => {
		const { data } = await api.get(`/postComments/${id}`)
		return data
	})

	createComment = createAsyncThunk(
		'comments/fetchCreateComment',
		async (params: TParams) => {
			const { postId, text } = params

			const { data } = await api.post('/comment', {
				postId,
				text,
			})

			return data
		}
	)

	deleteComment = createAsyncThunk(
		'comments/fetchDeleteComment',
		async (id: number) => {
			const { data } = await api.delete(`/commentDelete/${id}`)
			return data
		}
	)
}
