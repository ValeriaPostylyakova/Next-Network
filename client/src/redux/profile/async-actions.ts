import { ProfileService } from '@/services/profile-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class ProfileActions {
	profile = createAsyncThunk(
		'profile/fetchProfile',
		async (indificator: string) => {
			const { data } = await ProfileService.profile(indificator)

			return data
		}
	)
}
