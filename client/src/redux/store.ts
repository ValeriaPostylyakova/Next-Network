import { configureStore } from '@reduxjs/toolkit'
import chatsSlice from './chats/slice'
import friendsSuggestionSlice from './friends/slice'
import messagesSlice from './messages/slice'
import authSlice from './profile/auth-slice'
import searhSlice from './search/slice'
import profileSlice from './user/slice'

import postSlice from './post/slice'

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
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
