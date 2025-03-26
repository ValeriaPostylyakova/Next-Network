import { Status } from '../../../@types/fetchStatus'
import { TPost } from '../../../@types/post'

export interface InitialState {
	posts: TPost[]
	statusPosts: Status
	statusCreatePost: Status
	statusAddLike: Status
	statusRemoveLike: Status
	statusComments: Status
	statusDeletePost: Status
}

export type TParams = {
	id: number
	postId: number
	text: string
}

export type LikesData = {
	likes: number
	like: boolean
}

export type TFormData = {
	formData: FormData
	profileId: number
}
