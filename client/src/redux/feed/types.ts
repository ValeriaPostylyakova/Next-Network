import { Status } from '../../../@types/fetchStatus'
import { Post } from '../../../@types/post'

export type InitialState = {
	feed: Post[]
	status: Status
	statusComments: Status
}
