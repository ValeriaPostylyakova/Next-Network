import { ProfileService } from '@/services/profile-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export type TParams = {
	id: number
	firstname: string
	lastname: string
	identifier: string
	jobTitle: string
}

export class ProfileActions {
	profile = createAsyncThunk('profile/fetchProfile', async (id: string) => {
		const { data } = await ProfileService.profileInfo(id)
		return data
	})

	updateProfile = createAsyncThunk(
		'profile/fetchUpdateProfile',
		async (params: TParams) => {
			const { id, firstname, lastname, identifier, jobTitle } = params
			const { data } = await ProfileService.updateProfileInfo(
				id,
				firstname,
				lastname,
				jobTitle,
				identifier
			)
			return data
		}
	)
}
