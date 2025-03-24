import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TStory } from '../../../@types/stories'

export class StoriesActions {
	createStory = createAsyncThunk(
		'stories/fetchCreateStory',
		async (fileData: File) => {
			const { data } = await api.post<TStory>('/createStory', fileData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				withCredentials: true,
			})
			return data
		}
	)

	getStories = createAsyncThunk('stories/fetchStories', async () => {
		const { data } = await api.get<TStory[]>('/stories')
		return data
	})
}
