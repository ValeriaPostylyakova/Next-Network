import { PrismaClient } from '@prisma/client'
import { startCronJob } from '../utils/startCronJob'

const prisma = new PrismaClient()

export class StoriesService {
	async createStory(token: string, fileName: string) {
		const expiresAt = new Date(Date.now() + 2 * 60 * 1000)

		const tokenData = await prisma.token.findFirst({
			where: {
				refreshToken: token,
			},
		})

		if (!tokenData) {
			throw new Error('Пользователь не зарегистрирован')
		}

		const user = await prisma.user.findUnique({
			where: {
				id: tokenData.userId,
			},
		})

		if (!user) {
			throw new Error('Такого пользователя не существует')
		}

		const findStory = await prisma.story.findFirst({
			where: {
				userId: user.id,
			},
		})

		if (findStory) {
			const updatedStory = await prisma.story.update({
				where: {
					id: findStory.id,
				},
				data: {
					items: {
						create: {
							imageUrl: `${process.env.API_URL}/images/story/${fileName}`,
							expiresAt: expiresAt,
						},
					},
				},
				include: {
					items: true,
				},
			})

			startCronJob()

			return updatedStory
		} else {
			const newStory = await prisma.story.create({
				data: {
					userId: user.id,
					fullname: user.firstname,
					imageUrl: user.imageUrl,
					items: {
						create: {
							imageUrl: `${process.env.NEXT_PUBLIC_API_URL}/images/story/${fileName}`,
							expiresAt: expiresAt,
						},
					},
				},
				include: {
					items: true,
				},
			})
			startCronJob()
			return newStory
		}
	}

	async getStrories() {
		const stories = await prisma.story.findMany({
			include: {
				items: true,
			},
			take: 8,
			orderBy: {
				createdAt: 'asc',
			},
		})

		if (!stories) {
			throw new Error('Истории не найдены')
		}

		return stories
	}
}
