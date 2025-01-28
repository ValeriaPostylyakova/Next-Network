import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export class ProfileService {
	async profile(id: string) {
		const profile = await prisma.user.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!profile) {
			throw new Error('Такого профиля не существует')
		}
		return profile
	}
}
