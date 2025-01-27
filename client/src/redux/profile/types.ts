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
	text?: string
	comments?: string[]
}

export type IProfile = {
	id: number
	fullname: string
	email: string
}

export interface InitialState {
	profileInfo: IProfile | undefined
	statusProfileInfo: Status
	statusPosts: Status
	statusCreatePost: Status
	posts: Post[]
	postImages?: string
}
