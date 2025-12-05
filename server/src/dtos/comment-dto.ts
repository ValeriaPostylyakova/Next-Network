import { Comment } from '@prisma/client'

export class CommentDTO {
	id
	date

	constructor(comment: Comment) {
		const date = new Date(comment.createdAt)

		this.id = comment.id
		this.date = date.toLocaleTimeString('ru-RU', {
			timeZone: 'Europe/Moscow',
			year: 'numeric',
			month: 'short',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		})
	}
}
