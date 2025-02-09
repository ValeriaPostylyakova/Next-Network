import { configureStore } from '@reduxjs/toolkit'
import friendsSuggestionSlice from './friends/slice'
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
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
