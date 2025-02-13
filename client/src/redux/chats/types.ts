import { TChat } from '../../../@types/chat'
import { Status } from '../../../@types/fetchStatus'

export type InitialState = {
	chats: TChat[]
	chat: TChat
	statusChats: Status
	statusChat: Status
}
