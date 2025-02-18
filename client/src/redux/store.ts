import { configureStore } from '@reduxjs/toolkit'
import chatsSlice from './chats/slice'
import friendsSuggestionSlice from './friends/slice'
import messagesSlice from './messages/slice'
import postSlice from './post/slice'
import authSlice from './profile/auth-slice'
import searhSlice from './search/slice'
import storiesSlice from './stories/slice'
import profileSlice from './user/slice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authSlice,
			post: postSlice,
			friendsSuggestion: friendsSuggestionSlice,
			user: profileSlice,
			search: searhSlice,
			chats: chatsSlice,
			messages: messagesSlice,
			stories: storiesSlice,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
