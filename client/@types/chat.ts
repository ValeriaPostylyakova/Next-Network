import { TProfile } from './profile'

export type TChat = {
	id: number
	users: TProfile[]
	messages: TMessage[]
}

export type TMessage = {
	id: number
	createAt: Date
	sender: string
	text: string
}
