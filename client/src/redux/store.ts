import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth-slice'
import profileSlice from './profile/profile-slice'
import postSlice from './post/slice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authSlice,
			profile: profileSlice,
			post: postSlice,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
