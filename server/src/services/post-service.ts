import { PrismaClient } from '@prisma/client'
import { PostDTO } from '../dtos/post-dto'

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
			include: {
				comments: true,
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
				fullname: user.firstname + ' ' + user.lastname,
				jobTitle: user.jobTitle,
				userImageUrl: user.imageUrl,
				postImageUrl: fileData
					? `http://localhost:4200/images/posts/${fileData}`
					: null,
				text: textData,
				userId: user.id,
				likes: 0,
			},
		})

		const postDate = new PostDTO(post)

		const postData = await prisma.post.update({
			where: {
				id: post.id,
			},
			data: {
				date: postDate.date,
			},
		})

		return postData
	}

	async comments(
		id: string,
		text: string,
		username: string,
		userImgUrl?: string
	) {
		const post = await prisma.post.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!post) {
			throw Error('Такого поста не существует')
		}

		const postData = await prisma.post.update({
			where: {
				id: Number(id),
			},
			data: {},
		})
	}

	async deletePost(id: string) {
		const post = await prisma.post.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!post) {
			throw new Error('Такого поста не существует')
		}

		await prisma.post.delete({
			where: {
				id: Number(id),
			},
		})

		return post
	}
}
