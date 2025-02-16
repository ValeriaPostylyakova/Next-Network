import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class StoriesService {
	async getStrories() {
		const stories = await prisma.story.findMany({
			include: {
				items: true,
			},
		})

		if (!stories) {
			throw new Error('Истории не найдены')
		}

		return stories
	}
}
