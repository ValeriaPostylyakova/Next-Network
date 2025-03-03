import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserFromToken = async (token: string) => {
	const tokenData = await prisma.token.findFirst({
		where: { refreshToken: token },
	})

	if (!tokenData) {
		throw new Error('Пользователь не зарегистрирован')
	}

	const user = await prisma.user.findFirst({
		where: { id: tokenData.userId },
	})

	if (!user) {
		throw new Error('Такого пользователя не существует')
	}

	return user
}
