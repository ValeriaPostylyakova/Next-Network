import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TComments, TPost } from '../../../@types/post'

type TParams = {
	id: number
	postId: number
	text: string
}

export type LikesData = {
	likes: number
	like: boolean
}

export class PostActions {
	createPost = createAsyncThunk(
		'post/fetchCreatePost',
		async (formData: FormData) => {
			const { data } = await api.post<TPost>('/post', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				withCredentials: true,
			})
			return data
		}
	)

	posts = createAsyncThunk('post/fetchPosts', async (id: string) => {
		const { data } = await api.get<TPost[]>(`/posts/${id}`)
		return data
	})

	deletePost = createAsyncThunk('post/deletePost', async (id: number) => {
		const { data } = await api.delete<TPost>(`/postDelete/${id}`)
		return data
	})

	addLikes = createAsyncThunk('post/addPostLike', async (id: string) => {
		const { data } = await api.patch<LikesData>(`/addPostLike/${id}`)
		return data
	})

	removeLikes = createAsyncThunk('post/removePostLike', async (id: string) => {
		const { data } = await api.patch<LikesData>(`/removePostLike/${id}`)
		return data
	})

	comments = createAsyncThunk('post/fetchComments', async (id: string) => {
		const { data } = await api.get<TComments[]>(`/postComments/${id}`)
		return data
	})

	createComment = createAsyncThunk(
		'comments/fetchCreateComment',
		async (params: TParams) => {
			const { id, postId, text } = params

			const { data } = await api.post('/comment', {
				id,
				postId,
				text,
			})

			return data
		}
	)

	deleteComment = createAsyncThunk(
		'comments/fetchDeleteComment',
		async (id: number) => {
			const { data } = await api.delete<TComments>(`/commentDelete/${id}`)
			return data
		}
	)
}
