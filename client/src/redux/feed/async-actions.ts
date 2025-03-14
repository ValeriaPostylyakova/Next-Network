import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TPost } from '../../../@types/post'

export class FeedActions {
	getFeed = createAsyncThunk('feed/fetchFeed', async () => {
		const { data } = await api.get<TPost[]>('/feed')
		return data
	})
}
