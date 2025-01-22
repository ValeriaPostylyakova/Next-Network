import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export class ProfileService {
	async profile(indificator: string) {
		const profile = await prisma.user.findFirst({
			where: {
				identifier: `@${indificator}`,
			},
			include: {
				friends: true,
				posts: true,
				stories: true,
			},
		})

		if (!profile) {
			throw new Error('Такого профиля не существует')
		}

		return profile
	}
}
