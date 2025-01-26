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

	async posts(id: string) {
		const postsData = await prisma.post.findMany({
			where: {
				userId: Number(id),
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		if (!postsData) {
			return null
		}

		return postsData
	}

	async createPost(token: string, textData?: string, fileData?: string) {
		const tokenData = await prisma.token.findFirst({
			where: {
				refreshToken: token,
			},
		})

		if (!tokenData) {
			throw new Error('Пользователь не зарегистрирован')
		}

		const user = await prisma.user.findFirst({
			where: {
				id: tokenData.userId,
			},
		})

		if (!user) {
			throw new Error('Такого пользователя не существует')
		}

		const post = await prisma.post.create({
			data: {
				fullname: user.fullname,
				jobTitle: user.jobTitle,
				userImageUrl: user.imageUrl,
				postImageUrl: fileData,
				text: textData,
				userId: user.id,
				comments: [],
				likes: 0,
			},
		})

		return post
	}
}
