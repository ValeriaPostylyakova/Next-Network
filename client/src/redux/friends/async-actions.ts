import { api } from '@/http/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TProfile } from '../../../@types/profile'

export class FriendsSuggestionActions {
	getFriendsSuggestion = createAsyncThunk(
		'friends/fetchFriendsSuggestion',
		async () => {
			const { data } = await api.get<TProfile[]>(`/friendsSuggestions`)
			return data
		}
	)
}
