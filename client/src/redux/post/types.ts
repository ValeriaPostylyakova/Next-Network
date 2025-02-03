import { Status } from '../../../@types/fetchStatus'
import { Post } from '../../../@types/post'

export interface InitialState {
	posts: Post[]
	statusPosts: Status
	statusCreatePost: Status
	statusAddLike: Status
	statusRemoveLike: Status
	statusComments: Status
	statusDeletePost: Status
}
