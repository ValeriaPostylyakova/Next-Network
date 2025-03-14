export type TPost = {
	id: number
	userId: number
	postImageUrl?: string
	fullname: string
	jobTitle?: string
	userImageUrl?: string
	likes: number
	comments: TComments[]
	like: boolean
	text?: string
	date: string
}

export type TComments = {
	id: number
	userId: number
	username: string
	userImgUrl?: string
	text: string
	date: string
}
