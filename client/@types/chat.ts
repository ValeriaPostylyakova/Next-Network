import { TProfile } from './profile'

type TChatUsers = {
	user: TProfile
}

export type TChat = {
	id: number
	chatUsers: TChatUsers[]
	messages: TMessage[]
}

export type TMessage = {
	id?: number
	sender: string
	text: string
	chatId: number | string
	time: string
}
