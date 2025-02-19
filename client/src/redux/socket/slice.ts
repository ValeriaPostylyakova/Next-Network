import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { InitialState } from './types'

const initialState: InitialState = {
	socket: null,
}

const socketSlice = createSlice({
	name: 'socket',
	initialState,
	reducers: {
		setSocket: (state, action: PayloadAction<Socket>) => {
			state.socket = action.payload
		},
	},
})

export default socketSlice.reducer
export const { setSocket } = socketSlice.actions
