import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'
import { FetchAuth } from './async-actions'
import { InitiateState } from './types'

const initialState: InitiateState = {
	user: null,
	isAuth: false,
	status: Status.LOADIND,
}

const fetchAuth = new FetchAuth()

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},

		setUser: (state, action: PayloadAction<TProfile>) => {
			state.user = action.payload
		},
	},

	extraReducers: builder => {
		builder
			.addCase(fetchAuth.registration.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.registration.fulfilled, (state, action) => {
				state.isAuth = true
				state.status = Status.SUCCESS
				state.user = action.payload?.user
			})

			.addCase(fetchAuth.registration.rejected, state => {
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.login.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.login.fulfilled, (state, action) => {
				state.isAuth = true
				state.status = Status.SUCCESS
				state.user = action.payload.user
			})
			.addCase(fetchAuth.login.rejected, state => {
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.logout.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.logout.fulfilled, state => {
				state.isAuth = false
				state.user = null
			})
			.addCase(fetchAuth.logout.rejected, state => {
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.checkAuth.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.checkAuth.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.isAuth = true
				state.user = action.payload.user
			})
			.addCase(fetchAuth.checkAuth.rejected, state => {
				state.status = Status.ERROR
			})
	},
})

export const { setAth, setUser } = authSlice.actions
export default authSlice.reducer
