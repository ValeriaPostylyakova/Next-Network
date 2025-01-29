import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PostService {
	async addLike(id: string) {
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
				like: true,
			},
		})

		return updatedPost
	}

	async removeLike(id: string) {
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
				likes: post.likes - 1,
				like: false,
			},
		})

		return updatedPost
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

	async comments(id: string) {
		const commentsData = await prisma.post.findFirst({
			where: {
				id: Number(id),
			},
			select: {
				comments: true,
			},
		})

		if (!commentsData) {
			return null
		}

		return commentsData
	}
}
