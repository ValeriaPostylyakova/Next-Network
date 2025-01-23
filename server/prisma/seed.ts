import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function up() {
	await prisma.user.create({
		data: {
			email: 'test@mail.ru',
			password: bcrypt.hashSync('test', 7),
			id: 1,
			isActivated: false,
			fullname: 'Test Test',
			identifier: 'test3',
			jobTitle: 'Product Desiner, slohUI',
		},
	})

	await prisma.token.create({
		data: {
			refreshToken:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzM0BtYWlsLnJ1IiwiaWQiOjIwLCJpc0FjdGl2YXRlZCI6ZmFsc2UsImZ1bGxuYW1lIjoiVGVzdCBUZXN0IiwiaWRlbnRpZmllciI6InRlc3QzIiwiaWF0IjoxNzM3NjM2MDY4LCJleHAiOjE3NDAyMjgwNjh9.vT-kL91NlmPykAu9_gh96Se5wuEXuj-CH9wShmgyP4Q',
			userId: 1,
		},
	})
	await prisma.post.createMany({
		data: [
			{
				postImageUrl:
					'https://i.pinimg.com/736x/0c/44/96/0c4496f2ce6b09278171c80ba92046e5.jpg',
				text: 'test text',
				fullname: 'Test Test',
				jobTitle: 'Product Desiner, slohUI',
				userImageUrl:
					'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
				likes: 10,
				comments: [
					{
						username: 'X_AE_A-13',
						text: 'test message 1',
					},
					{
						username: 'X_AE_A-15',
						text: 'test message 2',
					},
				],
				userId: 1,
			},
			{
				postImageUrl:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
				fullname: 'Test Test',
				jobTitle: 'Product Desiner, slohUI',
				userImageUrl:
					'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
				likes: 6,
				comments: [],
				userId: 1,
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Token" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main().then(async () => {
	try {
		await prisma.$disconnect()
	} catch (err) {
		console.error(err)
		await prisma.$disconnect()
		process.exit(1)
	}
})
