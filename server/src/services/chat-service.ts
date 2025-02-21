import { PrismaClient } from '@prisma/client'
import { MessageDTO } from '../dtos/message-dto'

const prisma = new PrismaClient()
export class ChatService {
	async createChat(userId: string, profileId: string) {
		const user1 = await prisma.user.findFirst({ where: { id: Number(userId) } })
		const user2 = await prisma.user.findFirst({
			where: { id: Number(profileId) },
		})

		if (!user1 || !user2) {
			throw new Error('Пользователь не найден')
		}

		const findChat = await prisma.chatUser.findFirst({
			where: {
				AND: [
					{ userId: user1.id },
					{
						chat: {
							chatUsers: {
								some: {
									userId: user2.id,
								},
							},
						},
					},
				],
			},
			select: {
				chatId: true,
			},
		})

		if (findChat) {
			const chat = await prisma.chat.findFirst({
				where: {
					id: findChat.chatId,
				},
				include: {
					chatUsers: {
						where: {
							userId: { not: Number(profileId) },
						},
						include: {
							user: true,
						},
					},
				},
			})

			return chat
		}

		const chat = await prisma.chat.create({
			data: {
				chatUsers: {
					create: [{ userId: user1.id }, { userId: user2.id }],
				},
			},
			include: { chatUsers: { include: { user: true } } },
		})

		return chat
	}

	async getChat(chatId: string, profileId: string) {
		// const chat = await prisma.chatUser.findFirst({
		// 	where: {
		// 		AND: [
		// 			{ userId: Number(userId) },
		// 			{
		// 				chat: {
		// 					chatUsers: {
		// 						some: {
		// 							userId: Number(profileId),
		// 						},
		// 					},
		// 				},
		// 			},
		// 		],
		// 	},
		// 	select: {
		// 		chatId: true,
		// 		user: true,
		// 	},
		// })

		const chat = await prisma.chat.findFirst({
			where: {
				id: Number(chatId),
			},
			include: {
				chatUsers: {
					where: {
						userId: { not: Number(profileId) },
					},
					include: {
						user: true,
					},
				},
			},
		})

		if (!chat) {
			throw new Error('Чат не найден')
		}
		return chat
	}

	async getChats(id: string) {
		const chats = await prisma.chat.findMany({
			where: {
				chatUsers: {
					some: {
						userId: Number(id),
					},
				},
			},
			include: {
				messages: true,
				chatUsers: {
					where: {
						userId: {
							not: Number(id),
						},
					},
					include: { user: true },
				},
			},
		})

		if (!chats) {
			return null
		}

		return chats
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

		const newMessage = new MessageDTO(message)

		const messageData = await prisma.message.update({
			where: {
				id: newMessage.id,
			},
			data: {
				time: newMessage.time,
			},
		})

		return messageData
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
