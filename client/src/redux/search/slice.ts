import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../@types/fetchStatus'
import { UsersActions } from './async-actions'
import { InitialState } from './types'

const userActions = new UsersActions()

const initialState: InitialState = {
	users: [],
	status: Status.LOADIND,
}

const searhSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(userActions.getUsers.pending, state => {
				state.status = Status.LOADIND
			})
			.addCase(userActions.getUsers.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.users = action.payload
			})
			.addCase(userActions.getUsers.rejected, (state, action) => {
				state.status = Status.ERROR
			}),
})

export default searhSlice.reducer
