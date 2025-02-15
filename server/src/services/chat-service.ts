import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class ChatService {
	async getChats(id: string) {
		const chats = await prisma.chat.findMany({
			where: {
				users: {
					some: {
						id: Number(id),
					},
				},
			},
			include: {
				messages: true,
				users: {
					where: {
						id: {
							not: Number(id),
						},
					},
				},
			},
		})

		if (!chats) {
			return null
		}

		return chats
	}

	async getChat(id: string, userId: string) {
		const chat = await prisma.chat.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				users: {
					where: {
						id: {
							not: Number(userId),
						},
					},
				},
			},
		})

		if (!chat) {
			return null
		}

		return chat
	}

	async createMessage(data: { text: string; sender: string; chatId: string }) {
		const message = await prisma.message.create({
			data: {
				text: data.text,
				sender: data.sender,
				chatId: Number(data.chatId),
			},
		})

		if (!data.chatId) {
			throw new Error('Такого чата не существует')
		}

		if (!data.sender) {
			throw new Error('Такого пользователя не существует')
		}

		if (!message) {
			throw new Error('Ошибка при создании сообщения')
		}

		return message
	}

	async getMessages(id: string) {
		const messages = await prisma.message.findMany({
			where: {
				chatId: Number(id),
			},
			orderBy: {
				createdAt: 'asc',
			},
		})

		if (!messages) {
			return null
		}

		return messages
	}
}
