import { PrismaClient } from '@prisma/client'

import { CommentDTO } from '../dtos/comment-dto.js'
import { getUserFromToken } from '../utils/getUserFromToken.js'

const prisma = new PrismaClient()

export class CommentsService {
	async create(id: string, postId: number, text: string) {
		const post = await prisma.post.findFirst({
			where: {
				id: Number(postId),
			},
		})

		if (!post) {
			throw new Error('Такого поста не существует')
		}

		const user = await getUserFromToken(id)

		const comment = await prisma.comment.create({
			data: {
				postId: postId,
				username: user.firstname + ' ' + user.lastname,
				userId: user.id,
				userImgUrl: user.imageUrl ? user.imageUrl : null,
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
