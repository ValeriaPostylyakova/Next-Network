import { Post } from '@prisma/client'

export class PostDTO {
	id
	date
	userId

	constructor(data: Post) {
		const date = new Date(data.createdAt)

		this.id = data.id
		this.userId = data.userId
		this.date = date.toLocaleDateString('ru-RU', {
			timeZone: 'Europe/Moscow',
			year: 'numeric',
			month: 'short',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		})
	}
}
