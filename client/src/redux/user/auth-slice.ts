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
				state.user = {} as TProfile
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

		builder.addCase(fetchAuth.updateProfile.pending, state => {
			state.statusUpdateUserInfo = Status.LOADIND
		})
		builder.addCase(fetchAuth.updateProfile.fulfilled, (state, actions) => {
			state.statusUpdateUserInfo = Status.SUCCESS
			state.user = actions.payload
		})
		builder.addCase(fetchAuth.updateProfile.rejected, state => {
			state.statusUpdateUserInfo = Status.ERROR
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
		builder.addCase(fetchAuth.updateProfileEmail.rejected, state => {
			state.statusUpdateUserEmail = Status.ERROR
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
		builder.addCase(fetchAuth.updateProfilePhone.rejected, state => {
			state.statusUpdateUserPhone = Status.ERROR
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

		builder.addCase(fetchAuth.updateProfileImageUrl.rejected, state => {
			state.statusUpdateUserImageUrl = Status.ERROR
		})
	},
})

export const { setAth, setUser, setUserImageUrl } = authSlice.actions
export default authSlice.reducer
