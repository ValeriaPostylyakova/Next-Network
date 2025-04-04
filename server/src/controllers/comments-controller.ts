import { Request, Response } from 'express'
import { CommentsService } from '../services/comments-service'

const commentsService = new CommentsService()

export class CommentsController {
	async createCommentPost(req: Request, res: Response): Promise<any> {
		try {
			const { id, postId, text } = req.body
			const comment = await commentsService.create(id, postId, text)

			return res.status(200).json(comment)
		} catch (e) {
			console.log(e)
			return res
				.status(400)
				.json({ message: 'Ошибка при создании комментария' })
		}
	}

	async deleteComment(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params
			const comment = await commentsService.delete(id)
			return res.status(200).json(comment)
		} catch (e) {
			console.log(e)
			return res
				.status(400)
				.json({ message: 'Ошибка при удалении комментария' })
		}
	}
}
