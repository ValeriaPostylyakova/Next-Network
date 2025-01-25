import { ProfileService } from '@/services/profile-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

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
		async (id: string) => {
			const { data } = await ProfileService.posts(id)
			return data
		}
	)
}
