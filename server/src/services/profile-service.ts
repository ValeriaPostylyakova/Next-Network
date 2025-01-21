import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class ProfileService {
	async getProfile(email: string) {
		const user = await prisma.user.findFirst({
			where: {
				email: email,
			},
			include: {
				posts: true,
				stories: true,
				friends: true,
				chats: true,
			},
		})

		if (!user) {
			throw Error('Ошибка при получении пользователя')
		}

		return user
	}
}
