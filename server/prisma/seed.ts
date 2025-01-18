import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function up() {
	await prisma.user.createMany({
		data: [
			{
				email: 'postylyakova.valeria@mail.ru',
				password: '12345',
				userName: 'Valeria Postylyakova',
				token: '11111',
				role: 'USER',
			},
			{
				email: 'jonh@mail.ru',
				password: '12345678890',
				userName: 'Jonh Petrov',
				token: '22222',
				role: 'ADMIN',
			},
		],
	})

	await prisma.post.createMany({
		data: [
			{
				imageUrl:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
				likes: 10,
				userId: 1,
			},
			{
				imageUrl:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
				likes: 6,
				userId: 1,
			},
			{
				imageUrl:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
				likes: 9,
				userId: 2,
			},
			{
				imageUrl:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
				likes: 60,
				userId: 2,
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`
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
