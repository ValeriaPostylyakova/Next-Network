import { TProfile } from './profile'

export type TChat = {
	id: number
	users: TProfile[]
	messages: TMessage[]
}

export type TMessage = {
	id?: number
	sender: string
	text: string
	chatId: number | string
	time: string
}
