import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class FeedService {
	async getFeed() {
		const feed = await prisma.post.findMany({
			include: {
				comments: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
			take: 10,
		})

		if (!feed) {
			throw new Error('Лента не найдена')
		}

		return feed
	}
}
