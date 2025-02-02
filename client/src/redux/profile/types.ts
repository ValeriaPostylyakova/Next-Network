import { Status } from '../auth/types'

export type Chat = {
	id: number
	userId?: number
	friendId: number
}

export type Friend = {
	id: number
	userId?: number
}

export type StoryItem = {
	id: number
	imageUrl: string
	storyId?: number
}

export type Post = {
	id: number
	userId: number
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	likes: number
	comments: Comments[]
	like: boolean
	text?: string
}

export type Comments = {
	id: number
	username: string
	userImgUrl?: string
	text: string
}

export type IProfile = {
	id: number
	fullname: string
	email: string
	jobTitle?: string
	userImageUrl?: string
	identifier: string
}

export interface InitialState {
	profileInfo: IProfile | undefined
	statusProfileInfo: Status
}
