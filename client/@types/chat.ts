import { TProfile } from './profile'

type TChatUsers = {
	user: TProfile
}

export type TChat = {
	id: number
	chatUsers: TChatUsers[]
}

export type TMessage = {
	id: number
	sender: string
	text: string
	chatId: number | string
	time: string
	isRead: boolean
}
