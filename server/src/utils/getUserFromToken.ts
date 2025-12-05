import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserFromToken = async (userId: string) => {
	const user = await prisma.user.findUnique({
		where: { id: Number(userId) },
	})

	if (!user) {
		throw new Error('Такого пользователя не существует')
	}

	return user
}
