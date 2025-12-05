import { Status } from '../../../@types/fetchStatus'
import { TUnreadMessage } from '../../../@types/unread-messages'

export interface InitialState {
	unreadMessages: TUnreadMessage[]
	status: Status
}
