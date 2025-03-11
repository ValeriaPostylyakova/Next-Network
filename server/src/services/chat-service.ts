import { PrismaClient } from '@prisma/client'

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
						select: {
							user: true,
							chatId: true,
							chat: {
								include: {
									messages: true,
								},
							},
						},
					},
				},
			})

			return chat
		} else {
			const chat = await prisma.chat.create({
				data: {
					chatUsers: {
						create: [{ userId: user1.id }, { userId: user2.id }],
					},
				},
				include: {
					chatUsers: {
						include: {
							user: true,
						},
					},
				},
			})

			return chat
		}
	}

	async getChat(chatId: string, profileId: string) {
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

	async getChats(id: number) {
		const chats = await prisma.chat.findMany({
			where: {
				chatUsers: {
					some: {
						userId: id,
					},
				},
			},
			include: {
				messages: true,
				unreadMessage: true,
				chatUsers: {
					where: {
						userId: {
							not: id,
						},
					},
					include: {
						user: true,
					},
				},
			},
		})

		if (!chats) {
			return null
		}

		return chats
	}

	async deleteChat(id: string) {
		const chat = await prisma.chat.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!chat) {
			throw new Error('Такого чата не существует')
		}

		await prisma.unreadMessage.deleteMany({
			where: {
				chatId: chat.id,
			},
		})

		await prisma.chatUser.deleteMany({
			where: {
				chatId: chat.id,
			},
		})

		await prisma.chat.delete({
			where: {
				id: chat.id,
			},
		})

		return chat
	}

	async deleteChatEmpty(id: string) {
		const chat = await prisma.chat.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				messages: true,
			},
		})

		if (!chat) {
			throw new Error('Такого чата не существует')
		}

		if (chat.messages.length <= 0) {
			await prisma.chat.delete({
				where: {
					id: Number(id),
				},
			})
		}
	}
}
