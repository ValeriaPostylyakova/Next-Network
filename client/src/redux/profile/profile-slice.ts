import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../auth/types'
import { ProfileActions } from './async-actions'
import { InitialState } from './types'

const profileActions = new ProfileActions()

const initialState: InitialState = {
	profile: undefined,
	status: Status.LOADIND,
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(profileActions.profile.pending, state => {
			state.status = Status.LOADIND
		})
		builder.addCase(profileActions.profile.fulfilled, (state, actions) => {
			state.status = Status.SUCCESS
			state.profile = actions.payload
		})
		builder.addCase(profileActions.profile.rejected, state => {
			state.status = Status.ERROR
		})
	},
})

export default profileSlice.reducer
