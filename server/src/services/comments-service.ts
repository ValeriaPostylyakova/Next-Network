import { PrismaClient } from '@prisma/client'
import { CommentDTO } from '../dtos/comment-dto'

const prisma = new PrismaClient()

export class CommentsService {
	async create(id: number, username: string, userImgUrl: string, text: string) {
		const post = await prisma.post.findFirst({
			where: {
				id: id,
			},
		})

		if (!post) {
			throw new Error('Такого поста не существует')
		}

		const comment = await prisma.comment.create({
			data: {
				postId: id,
				username: username,
				userImgUrl: userImgUrl ? userImgUrl : null,
				text: text,
			},
		})

		const commentDate = new CommentDTO(comment)

		const commentData = await prisma.comment.update({
			where: {
				id: commentDate.id,
			},
			data: {
				date: commentDate.date,
			},
		})

		return commentData
	}

	async delete(id: string) {
		const comment = await prisma.comment.delete({
			where: {
				id: Number(id),
			},
		})

		if (!comment) {
			throw new Error('Такого комментария не существует')
		}

		return comment
	}
}
