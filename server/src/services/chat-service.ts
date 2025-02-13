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

	async getMessages(id: string) {
		const messages = await prisma.message.findMany({
			where: {
				chatId: Number(id),
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		if (!messages) {
			return null
		}

		return messages
	}
}
