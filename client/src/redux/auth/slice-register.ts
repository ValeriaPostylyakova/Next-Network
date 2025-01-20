import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '../../services/auth-service'
import { fetchRegistration } from './async-actions'
import { InitiateState, Status } from './types'

const initialState: InitiateState = {
	user: undefined,
	isAuth: false,
	status: Status.LOADIND,
}

export const authSliceRegister = createSlice({
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
		builder.addCase(fetchRegistration.pending, state => {
			state.status = Status.LOADIND
		})
		builder.addCase(fetchRegistration.fulfilled, (state, action) => {
			state.isAuth = true
			state.user = action.payload?.user
		})
		builder.addCase(fetchRegistration.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export const { setAth, setUser } = authSliceRegister.actions
export default authSliceRegister.reducer
