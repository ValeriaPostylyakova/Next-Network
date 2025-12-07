import { PrismaClient } from '@prisma/client'
import { MessageDTO } from '../dtos/message-dto.js'

const prisma = new PrismaClient()

export class MessageService {
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

	async deleteMessage(id: string) {
		const message = await prisma.message.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (message) {
			await prisma.unreadMessage.deleteMany({
				where: {
					messageId: message.id,
				},
			})

			await prisma.message.delete({
				where: {
					id: Number(id),
				},
			})
		}
	}

	async getUnreadMessages(id: string) {
		const unreadMessages = await prisma.unreadMessage.findMany({
			where: {
				userId: Number(id),
			},
			include: {
				message: true,
			},
		})

		if (!unreadMessages) {
			return null
		}

		if (!id) {
			return null
		}

		return unreadMessages
	}
}
