import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class StoriesActions {
	getStories = createAsyncThunk('stories/fetchStories', async () => {
		const { data } = await api.get('/stories')
		return data
	})
}
