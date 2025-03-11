import { Request, Response } from 'express'
import { MessageService } from '../services/message-service'

const messageService = new MessageService()

export class MessageController {
	async getMessages(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params

			const response = await messageService.getMessages(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при получении сообщений' })
		}
	}

	async deleteMessage(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params

			const response = await messageService.deleteMessage(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при удалении сообщений' })
		}
	}

	async getUnreadMessages(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params

			const response = await messageService.getUnreadMessages(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res
				.status(500)
				.json({ message: 'Ошибка при получении непрочитанных сообщений' })
		}
	}
}
