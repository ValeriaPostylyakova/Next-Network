import { CommentsService } from '../services/comments-service'

const commentsService = new CommentsService()

export class CommentsController {
	async createCommentPost(req: any, res: any) {
		try {
			const { id, username, userImgUrl, text } = req.body
			const comment = await commentsService.create(
				id,
				username,
				userImgUrl,
				text
			)

			return res.status(200).json(comment)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при создании комментария' })
			console.log(e)
		}
	}

	async deleteComment(req: any, res: any) {
		try {
			const { id } = req.params
			const comment = await commentsService.delete(id)
			return res.status(200).json(comment)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при удалении комментария' })
		}
	}
}
