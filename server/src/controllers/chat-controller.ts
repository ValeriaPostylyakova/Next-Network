import { Request, Response } from 'express'
import { getUserFromToken } from '../utils/getUserFromToken'

import { ChatService } from '../services/chat-service'

const chatService = new ChatService()

export class ChatController {
	async getChats(req: Request, res: Response): Promise<any> {
		try {
			const userId = req.params.id
			const user = await getUserFromToken(userId)
			const response = await chatService.getChats(user.id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при получении чатов' })
		}
	}

	async createChat(req: Request, res: Response): Promise<any> {
		try {
			const { userId, profileId } = req.body

			const response = await chatService.createChat(userId, profileId)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при создании чата' })
		}
	}

	async getChat(req: Request, res: Response): Promise<any> {
		try {
			const { chatId, profileId } = req.query

			const response = await chatService.getChat(
				chatId as string,
				profileId as string
			)
			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при получении чата' })
		}
	}

	async deleteChat(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params

			const response = await chatService.deleteChat(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при удалении чата' })
		}
	}

	async deleteChatEmpty(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params

			const response = await chatService.deleteChatEmpty(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при удалении чата' })
		}
	}
}
