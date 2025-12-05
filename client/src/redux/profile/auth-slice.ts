import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'
import { FetchAuth } from './async-actions'
import { InitiateState } from './types'

const initialState: InitiateState = {
	profile: {} as TProfile,
	isAuth: false,
	status: Status.LOADIND,
	statusUpdateUserInfo: Status.LOADIND,
	statusUpdateUserEmail: Status.LOADIND,
	statusUpdateUserPhone: Status.LOADIND,
	statusUpdateUserImageUrl: Status.LOADIND,
	statusDeleteAvatar: Status.LOADIND,
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
			state.profile = action.payload
		},
		setUserImageUrl: (state, action: PayloadAction<string>) => {
			state.profile.imageUrl = action.payload
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
			})

			.addCase(fetchAuth.registration.rejected, (state, action) => {
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.login.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.login.fulfilled, (state, action) => {
				state.isAuth = true
				state.status = Status.SUCCESS
				state.profile = action.payload.user
			})

			.addCase(fetchAuth.login.rejected, (state, action) => {
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.logout.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.logout.fulfilled, state => {
				state.isAuth = false
				state.profile = {} as TProfile
			})
			.addCase(fetchAuth.logout.rejected, (state, action) => {
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.checkAuth.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.checkAuth.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.profile = action.payload.user
			})
			.addCase(fetchAuth.checkAuth.rejected, (state, action) => {
				state.status = Status.ERROR
			})

			.addCase(fetchAuth.getProfile.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.getProfile.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.profile = action.payload
			})
			.addCase(fetchAuth.getProfile.rejected, (state, action) => {
				state.status = Status.ERROR
			})

			.addCase(fetchAuth.updateProfile.pending, state => {
				state.statusUpdateUserInfo = Status.LOADIND
			})
			.addCase(fetchAuth.updateProfile.fulfilled, (state, actions) => {
				state.statusUpdateUserInfo = Status.SUCCESS
				state.profile = actions.payload
			})
			.addCase(fetchAuth.updateProfile.rejected, (state, action) => {
				state.statusUpdateUserInfo = Status.ERROR
			})

			.addCase(fetchAuth.updateProfileEmail.pending, state => {
				state.statusUpdateUserEmail = Status.LOADIND
			})
			.addCase(fetchAuth.updateProfileEmail.fulfilled, (state, actions) => {
				state.statusUpdateUserEmail = Status.SUCCESS
				state.profile = actions.payload
			})
			.addCase(fetchAuth.updateProfileEmail.rejected, (state, action) => {
				state.statusUpdateUserEmail = Status.ERROR
			})

			.addCase(fetchAuth.updateProfilePhone.pending, state => {
				state.statusUpdateUserPhone = Status.LOADIND
			})
			.addCase(fetchAuth.updateProfilePhone.fulfilled, (state, actions) => {
				state.statusUpdateUserPhone = Status.SUCCESS
				state.profile = actions.payload
			})
			.addCase(fetchAuth.updateProfilePhone.rejected, (state, action) => {
				state.statusUpdateUserPhone = Status.ERROR
			})

			.addCase(fetchAuth.updateProfileImageUrl.pending, state => {
				state.statusUpdateUserImageUrl = Status.LOADIND
			})

			.addCase(fetchAuth.updateProfileImageUrl.fulfilled, (state, action) => {
				state.statusUpdateUserImageUrl = Status.SUCCESS
				state.profile = action.payload
			})

			.addCase(fetchAuth.updateProfileImageUrl.rejected, (state, action) => {
				state.statusUpdateUserImageUrl = Status.ERROR
			})

			.addCase(fetchAuth.deleteAvatar.pending, state => {
				state.statusDeleteAvatar = Status.LOADIND
			})

			.addCase(fetchAuth.deleteAvatar.fulfilled, (state, action) => {
				state.statusDeleteAvatar = Status.SUCCESS
				state.profile = action.payload
			})

			.addCase(fetchAuth.deleteAvatar.rejected, (state, action) => {
				state.statusDeleteAvatar = Status.ERROR
			})
	},
})

export const { setAth, setUser, setUserImageUrl } = authSlice.actions
export default authSlice.reducer
