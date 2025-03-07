import { TProfile } from './profile'
import { TUnreadMessage } from './unread-messages'

type TChatUsers = {
	user: TProfile
}

export type TChat = {
	id: number
	chatUsers: TChatUsers[]
	messages: TMessage[]
	unreadMessage: TUnreadMessage[]
}

export type TMessage = {
	id: number
	sender: string
	text: string
	chatId: number | string
	time: string
	isRead: boolean
}
