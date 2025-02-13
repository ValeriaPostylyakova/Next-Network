import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class FriendsService {
	async getFriendsSuggetion() {
		const friendsSuggetion = await prisma.user.findMany({
			take: 4,
		})

		if (!friendsSuggetion) {
			throw new Error('Не удалось получить возможных друзей')
		}

		return friendsSuggetion
	}
}
