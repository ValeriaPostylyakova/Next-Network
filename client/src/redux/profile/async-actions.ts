import { ProfileService } from '@/services/profile-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class ProfileActions {
	profile = createAsyncThunk('profile/fetchProfile', async (id: string) => {
		const { data } = await ProfileService.profileInfo(id)
		return data
	})
}
