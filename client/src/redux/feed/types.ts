import { TFeed } from '../../../@types/feed'
import { Status } from '../../../@types/fetchStatus'

export type InitialState = {
	feed: TFeed
	status: Status
}
