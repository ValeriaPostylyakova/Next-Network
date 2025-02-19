import { Message } from '@prisma/client'

export class MessageDTO {
	id
	time

	constructor(message: Message) {
		const time = new Date(message.createdAt)

		this.id = message.id
		this.time = time.toLocaleTimeString('UTC', {
			hour: '2-digit',
			minute: '2-digit',
		})
	}
}
