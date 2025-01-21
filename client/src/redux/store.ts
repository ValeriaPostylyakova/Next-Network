import { configureStore } from '@reduxjs/toolkit'
import authSliceLogin from './auth/slice-login'
import authSliceLogout from './auth/slice-logout'
import authSliceRegister from './auth/slice-register'

export const makeStore = () => {
	return configureStore({
		reducer: {
			authRegister: authSliceRegister,
			authLogin: authSliceLogin,
			authLogout: authSliceLogout,
		},
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
