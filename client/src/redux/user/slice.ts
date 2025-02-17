import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'
import { UserActions } from './async-actions'
import { InitialState } from './types'

const userActions = new UserActions()

const initialState: InitialState = {
	profile: {} as TProfile,
	statusProfile: Status.LOADIND,
	error: null,
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(userActions.getUser.pending, state => {
				state.statusProfile = Status.LOADIND
			})
			.addCase(userActions.getUser.fulfilled, (state, action) => {
				state.statusProfile = Status.SUCCESS
				state.profile = action.payload
				state.error = null
			})
			.addCase(userActions.getUser.rejected, (state, action) => {
				state.statusProfile = Status.ERROR
				state.error = action.payload
			}),
})

export default profileSlice.reducer
