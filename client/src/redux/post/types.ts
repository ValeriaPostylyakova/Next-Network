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
