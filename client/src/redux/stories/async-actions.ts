import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TStory } from '../../../@types/stories'
import { TFormData } from '../post/types'

export class StoriesActions {
	createStory = createAsyncThunk(
		'stories/fetchCreateStory',
		async (params: TFormData) => {
			const { formData, profileId } = params

			const { data } = await api.post<TStory>(
				`/createStory/${profileId}`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			return data
		}
	)

	getStories = createAsyncThunk('stories/fetchStories', async () => {
		const { data } = await api.get<TStory[]>('/stories')
		return data
	})
}
