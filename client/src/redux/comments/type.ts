import { Status } from '../auth/types'

export type Comment = {
	id: number
	username: string
	userImgUrl?: string
	text: string
}

export type TParams = {
	id: number
	username: string
	userImgUrl?: string
	text: string
}

export type InitialState = {
	comments: Comment[]
	statusComments: Status
	statusCreateComment: Status
}
