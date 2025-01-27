import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PostService {
	async update(id: string) {
		const post = await prisma.post.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!post) {
			throw new Error('Такого поста не существует')
		}

		const updatedPost = await prisma.post.update({
			where: {
				id: Number(id),
			},
			data: {
				likes: post.likes + 1,
			},
		})

		return updatedPost
	}
}
