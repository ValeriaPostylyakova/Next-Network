import { TMessage } from '../../../@types/chat'
import { Status } from '../../../@types/fetchStatus'

export type InitialState = {
	messages: TMessage[]
	statusMessage: Status
}
