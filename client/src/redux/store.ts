import { configureStore } from '@reduxjs/toolkit'
import friendsSuggestionSlice from './friends/slice'
import authSlice from './user/auth-slice'

import postSlice from './post/slice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authSlice,
			post: postSlice,
			friendsSuggestion: friendsSuggestionSlice,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
