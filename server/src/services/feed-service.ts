import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class FeedService {
	async getFeed() {
		const feed = await prisma.feed.findFirst({
			where: {
				id: 1,
			},
			include: {
				posts: true,
			},
		})

		if (!feed) {
			throw new Error('Лента не найдена')
		}

		return feed
	}
}
