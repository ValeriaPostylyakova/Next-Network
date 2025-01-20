import { configureStore } from '@reduxjs/toolkit'
import authSliceLogin from './auth/slice-login'
import authSliceLogout from './auth/slice-logout'
import authSliceRegister from './auth/slice-register'

export const store = configureStore({
	reducer: {
		authRegister: authSliceRegister,
		authLogin: authSliceLogin,
		authLogout: authSliceLogout,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
