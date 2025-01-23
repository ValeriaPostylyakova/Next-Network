import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export class ProfileService {
	async profile(indificator: string) {
		const profile = await prisma.user.findFirst({
			where: {
				identifier: indificator,
			},
		})

		if (!profile) {
			throw new Error('Такого профиля не существует')
		}
		return profile
	}

	async posts(id: string) {
		const postsData = await prisma.post.findMany({
			where: {
				userId: Number(id),
			},
		})

		if (!postsData) {
			return null
		}

		return postsData
	}
}
