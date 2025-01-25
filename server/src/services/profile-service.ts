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
		})

		if (!postsData) {
			return null
		}

		return postsData
	}

	async createPost(
		id: number,
		postImageUrl: string | null,
		text: string | null
	) {
		const user = await prisma.user.findFirst({
			where: {
				id: id,
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
				postImageUrl: postImageUrl,
				text: text,
				userId: user.id,
				comments: [],
				likes: 0,
			},
		})

		return post
	}
}
