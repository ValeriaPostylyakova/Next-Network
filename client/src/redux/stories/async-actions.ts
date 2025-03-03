import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class StoriesActions {
	createStory = createAsyncThunk(
		'stories/fetchCreateStory',
		async (fileData: File) => {
			const { data } = await api.post('/createStory', fileData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			return data
		}
	)

	getStories = createAsyncThunk('stories/fetchStories', async () => {
		const { data } = await api.get('/stories')
		return data
	})
}
