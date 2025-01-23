import { ProfileService } from '@/services/profile-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class ProfileActions {
	profile = createAsyncThunk(
		'profile/fetchProfile',
		async (indificator: string) => {
			const { data } = await ProfileService.profileInfo(indificator)
			return data
		}
	)

	posts = createAsyncThunk('profile/fetchPosts', async (id: number) => {
		const { data } = await ProfileService.posts(id)
		return data
	})
}
