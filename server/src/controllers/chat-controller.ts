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

	async getChat(req: any, res: any) {
		try {
			const { id } = req.params

			const response = await chatService.getChat(id)

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
}
