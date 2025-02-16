import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class FeedActions {
	getFeed = createAsyncThunk('feed/fetchFeed', async () => {
		const { data } = await api.get('/feed')
		return data
	})
}
