import { Status } from '../../../@types/fetchStatus'
import { TPost } from '../../../@types/post'

export type InitialState = {
	feed: TPost[]
	status: Status
	statusComments: Status
}
