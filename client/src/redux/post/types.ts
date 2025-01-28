import { Status } from '../auth/types'
import { Post } from '../profile/types'

export interface InitialState {
	posts: Post[]
	statusPosts: Status
	statusCreatePost: Status
	statusAddLike: Status
	statusRemoveLike: Status
}
