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
	imageUrl: string
	likes: number
	comments?: string[]
}

export type IProfile = {
	id: number
	fullname: string
	email: string
	posts?: Post[]
	stories?: StoryItem[]
	friend?: Friend[]
	chats?: Chat[]
}

export interface InitialState {
	profile: IProfile | undefined
	status: Status
}
