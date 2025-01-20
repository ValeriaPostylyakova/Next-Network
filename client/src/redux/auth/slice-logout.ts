import { createSlice } from '@reduxjs/toolkit'
import { fetchLogout } from './async-actions'
import { InitiateState, Status } from './types'

const initialState: InitiateState = {
	user: null,
	isAuth: false,
	status: Status.LOADIND,
}

export const authSliceRegister = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchLogout.pending, state => {
			state.status = Status.LOADIND
		})
		builder.addCase(fetchLogout.fulfilled, state => {
			state.isAuth = false
			state.user = null
		})
		builder.addCase(fetchLogout.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export default authSliceRegister.reducer
