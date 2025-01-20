import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '../../services/auth-service'
import { fetchLogin } from './async-actions'
import { InitiateState, Status } from './types'

const initialState: InitiateState = {
	user: undefined,
	isAuth: false,
	status: Status.LOADIND,
}

export const authSliceLogin = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},

		setUser: (state, action: PayloadAction<TUser>) => {
			state.user = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchLogin.pending, state => {
			state.status = Status.LOADIND
		})
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			state.isAuth = true
			state.user = action.payload?.user
		})
		builder.addCase(fetchLogin.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export const { setAth, setUser } = authSliceLogin.actions
export default authSliceLogin.reducer
