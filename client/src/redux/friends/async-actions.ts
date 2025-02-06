import { FriendsService } from '@/services/friends-service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export class FriendsSuggestionActions {
	getFriendsSuggestion = createAsyncThunk(
		'friends/fetchFriendsSuggestion',
		async () => {
			const { data } = await FriendsService.getFriendsSuggestions()
			return data
		}
	)
}
