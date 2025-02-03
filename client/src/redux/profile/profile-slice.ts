import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { ProfileActions } from './async-actions'
import { InitialState } from './types'

const profileActions = new ProfileActions()

const initialState: InitialState = {
	profileInfo: null,
	updateProfileStatus: Status.LOADIND,
	statusProfileInfo: Status.LOADIND,
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder.addCase(profileActions.profile.pending, state => {
			state.statusProfileInfo = Status.LOADIND
		})
		builder.addCase(profileActions.profile.fulfilled, (state, actions) => {
			state.statusProfileInfo = Status.SUCCESS
			state.profileInfo = actions.payload
		})
		builder.addCase(profileActions.profile.rejected, state => {
			state.statusProfileInfo = Status.ERROR
		})

		builder.addCase(profileActions.updateProfile.pending, state => {
			state.updateProfileStatus = Status.LOADIND
		})
		builder.addCase(
			profileActions.updateProfile.fulfilled,
			(state, actions) => {
				state.updateProfileStatus = Status.SUCCESS
				state.profileInfo = actions.payload
			}
		)
		builder.addCase(profileActions.updateProfile.rejected, state => {
			state.updateProfileStatus = Status.ERROR
		})
	},
})

export default profileSlice.reducer
