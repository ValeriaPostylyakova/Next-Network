import { ChatService } from '../services/chat-service'

const chatService = new ChatService()

export class ChatController {
	async getChats(req: any, res: any) {
		try {
			const { id } = req.params

			const response = await chatService.getChats(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при получении чатов' })
		}
	}

	async createChat(req: any, res: any) {
		try {
			const { userId, profileId } = req.body

			const response = await chatService.createChat(userId, profileId)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при создании чата' })
		}
	}

	async getChat(req: any, res: any) {
		try {
			const { chatId, profileId } = req.query

			const response = await chatService.getChat(chatId, profileId)
			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при получении чата' })
		}
	}

	async getMessages(req: any, res: any) {
		try {
			const { id } = req.params

			const response = await chatService.getMessages(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при получении сообщений' })
		}
	}

	async deleteMessage(req: any, res: any) {
		try {
			const { id } = req.params

			const response = await chatService.deleteMessage(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при удалении сообщений' })
		}
	}

	async deleteChat(req: any, res: any) {
		try {
			const { id } = req.params

			const response = await chatService.deleteChat(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			res.status(500).json({ message: 'Ошибка при удалении чата' })
		}
	}
}
