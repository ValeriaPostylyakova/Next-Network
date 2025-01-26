import { ProfileService } from '@/services/profile-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

type TParams = {
	postImageUrl?: string
	text?: string
	id?: number
	dataImages: any
}
export class ProfileActions {
	profile = createAsyncThunk('profile/fetchProfile', async (id: string) => {
		const { data } = await ProfileService.profileInfo(id)
		return data
	})

	posts = createAsyncThunk('profile/fetchPosts', async (id: string) => {
		const { data } = await ProfileService.posts(id)
		return data
	})

	createPost = createAsyncThunk(
		'profile/fetchCreatePost',
		async (formData: FormData) => {
			const { data } = await ProfileService.createPost(formData)
			return data
		}
	)
}
