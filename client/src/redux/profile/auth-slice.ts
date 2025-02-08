import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'
import { FetchAuth } from './async-actions'
import { InitiateState } from './types'

const initialState: InitiateState = {
	user: {} as TProfile,
	isAuth: false,
	status: Status.LOADIND,
	statusUpdateUserInfo: Status.LOADIND,
	statusUpdateUserEmail: Status.LOADIND,
	statusUpdateUserPhone: Status.LOADIND,
	statusUpdateUserImageUrl: Status.LOADIND,
	statusDeleteAvatar: Status.LOADIND,
	error: null,
	errorUpdateUserInfo: null,
	errorUpdateUserEmail: null,
	errorUpdateUserPhone: null,
	errorUpdateUserImageUrl: null,
	errorDeleteAvatar: null,
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
		setUserImageUrl: (state, action: PayloadAction<string>) => {
			state.user.imageUrl = action.payload
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
				state.user = action.payload.user
			})

			.addCase(fetchAuth.registration.rejected, (state, action) => {
				state.status = Status.ERROR
				state.error = action.payload
			})
			.addCase(fetchAuth.login.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.login.fulfilled, (state, action) => {
				state.isAuth = true
				state.error = null
				state.status = Status.SUCCESS
				state.user = action.payload.user
			})
			.addCase(fetchAuth.login.rejected, (state, action) => {
				state.error = action.payload
				state.status = Status.ERROR
			})
			.addCase(fetchAuth.logout.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.logout.fulfilled, state => {
				state.isAuth = false
				state.user = {} as TProfile
			})
			.addCase(fetchAuth.logout.rejected, (state, action) => {
				state.status = Status.ERROR
				state.error = action.payload
			})
			.addCase(fetchAuth.checkAuth.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(fetchAuth.checkAuth.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.isAuth = true
				state.user = action.payload.user
			})
			.addCase(fetchAuth.checkAuth.rejected, (state, action) => {
				state.status = Status.ERROR
				state.error = action.payload
			})

		builder.addCase(fetchAuth.updateProfile.pending, state => {
			state.statusUpdateUserInfo = Status.LOADIND
		})
		builder.addCase(fetchAuth.updateProfile.fulfilled, (state, actions) => {
			state.statusUpdateUserInfo = Status.SUCCESS
			state.user = actions.payload
		})
		builder.addCase(fetchAuth.updateProfile.rejected, (state, action) => {
			state.statusUpdateUserInfo = Status.ERROR
			state.errorUpdateUserInfo = action.payload
		})

		builder.addCase(fetchAuth.updateProfileEmail.pending, state => {
			state.statusUpdateUserEmail = Status.LOADIND
		})
		builder.addCase(
			fetchAuth.updateProfileEmail.fulfilled,
			(state, actions) => {
				state.statusUpdateUserEmail = Status.SUCCESS
				state.user = actions.payload
			}
		)
		builder.addCase(fetchAuth.updateProfileEmail.rejected, (state, action) => {
			state.statusUpdateUserEmail = Status.ERROR
			state.errorUpdateUserEmail = action.payload
		})

		builder.addCase(fetchAuth.updateProfilePhone.pending, state => {
			state.statusUpdateUserPhone = Status.LOADIND
		})
		builder.addCase(
			fetchAuth.updateProfilePhone.fulfilled,
			(state, actions) => {
				state.statusUpdateUserPhone = Status.SUCCESS
				state.user = actions.payload
			}
		)
		builder.addCase(fetchAuth.updateProfilePhone.rejected, (state, action) => {
			state.statusUpdateUserPhone = Status.ERROR
			state.errorUpdateUserPhone = action.payload
		})

		builder.addCase(fetchAuth.updateProfileImageUrl.pending, state => {
			state.statusUpdateUserImageUrl = Status.LOADIND
		})

		builder.addCase(
			fetchAuth.updateProfileImageUrl.fulfilled,
			(state, action) => {
				state.statusUpdateUserImageUrl = Status.SUCCESS
				state.user = action.payload
			}
		)

		builder.addCase(
			fetchAuth.updateProfileImageUrl.rejected,
			(state, action) => {
				state.statusUpdateUserImageUrl = Status.ERROR
				state.errorUpdateUserImageUrl = action.payload
			}
		)

		builder.addCase(fetchAuth.deleteAvatar.pending, state => {
			state.statusDeleteAvatar = Status.LOADIND
		})

		builder.addCase(fetchAuth.deleteAvatar.fulfilled, (state, action) => {
			state.statusDeleteAvatar = Status.SUCCESS
			state.user = action.payload
		})

		builder.addCase(fetchAuth.deleteAvatar.rejected, (state, action) => {
			state.statusDeleteAvatar = Status.ERROR
			state.errorDeleteAvatar = action.payload
		})
	},
})

export const { setAth, setUser, setUserImageUrl } = authSlice.actions
export default authSlice.reducer
