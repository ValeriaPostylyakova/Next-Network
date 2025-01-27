import { Status } from '../auth/types'
import { Post } from '../profile/types'

export interface InitialState {
	post: Post | null
	statusLikes: Status
}
