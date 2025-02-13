import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function up() {
	await prisma.user.createMany({
		data: [
			{
				email: 'valeria.postylyakova@yandex.ru',
				password: bcrypt.hashSync('postylyakovavs107', 7),
				id: 3,
				isActivated: false,
				firstname: 'Валерия',
				lastname: 'Постылякова',
				identifier: 'valeriapostylyakova',
				jobTitle: 'Frontend Developer',
				imageUrl:
					'https://sun9-31.userapi.com/impg/TVI3Ieil8CnHuLfFgv7WXHxoODTjRyD5XO-4sg/kY_6WrJhRbY.jpg?size=1623x2160&quality=95&sign=cdb1c07a7b2a7e2fc93359824349d5c3&type=album',
			},
			{
				email: 'ivanov@gmail.com',
				password: bcrypt.hashSync('ivanov53465346', 7),
				id: 1,
				isActivated: true,
				firstname: 'Иванов',
				lastname: 'Даниил',
				identifier: 'ivanov11',
				jobTitle: 'Web Developer',
				imageUrl:
					'https://img.freepik.com/free-vector/hand-drawn-clothes-person_79603-614.jpg',
			},
			{
				email: 'postj886@mail.ru',
				password: bcrypt.hashSync('gh43j5kg4hgk', 7),
				id: 2,
				isActivated: true,
				firstname: 'Кристина',
				lastname: 'Разина',
				identifier: 'yourname123',
				jobTitle: 'Designer',
				imageUrl: null,
			},
			{
				email: 'romanov8785@gmail.com',
				password: bcrypt.hashSync('fj5vldsqv2blfutr464', 7),
				id: 4,
				isActivated: false,
				firstname: 'Егор',
				lastname: 'Романов',
				identifier: 'romanov8785',
				jobTitle: 'Chief Information Security Officer',
				imageUrl:
					'https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.pngm',
			},
		],
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
				fullname: 'Валерия Постылякова',
				jobTitle: 'Frontend Developer',
				userImageUrl:
					'https://sun9-31.userapi.com/impg/TVI3Ieil8CnHuLfFgv7WXHxoODTjRyD5XO-4sg/kY_6WrJhRbY.jpg?size=1623x2160&quality=95&sign=cdb1c07a7b2a7e2fc93359824349d5c3&type=album',
				likes: 0,
				userId: 1,
			},
			{
				postImageUrl:
					'https://sun9-31.userapi.com/impg/TVI3Ieil8CnHuLfFgv7WXHxoODTjRyD5XO-4sg/kY_6WrJhRbY.jpg?size=1623x2160&quality=95&sign=cdb1c07a7b2a7e2fc93359824349d5c3&type=album',
				fullname: 'Валерия Постылякова',
				jobTitle: 'Frontend Developer',
				userImageUrl:
					'https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg',
				likes: 0,
				userId: 1,
			},
		],
	})

	await prisma.comment.createMany({
		data: [
			{
				text: 'test text',
				username: 'test',
				postId: 1,
			},
			{
				text: 'test text',
				username: 'test',
				postId: 1,
			},
		],
	})

	await prisma.chat.create({
		data: {
			id: 1,
			users: {
				connect: [{ id: 3 }, { id: 4 }],
			},
		},
	})

	await prisma.message.createMany({
		data: [
			{
				id: 1,
				text: 'test message',
				sender: 'valeria.postylyakova@yandex.ru',
				chatId: 1,
			},
			{
				id: 2,
				text: 'tLorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil citationem?',
				sender: 'anastasiabatrova@mail.ru',
				chatId: 1,
			},
			{
				id: 3,
				text: 'Lorem ipsum dolor sit ',
				sender: 'anastasiabatrova@mail.ru',
				chatId: 1,
			},
			{
				id: 4,
				text: 'test message Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
				sender: 'anastasiabatrova@mail.ru',
				chatId: 1,
			},
			{
				id: 5,
				text: 'LAST MESSAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
				sender: 'anastasiabatrova@mail.ru',
				chatId: 1,
			},
			{
				id: 6,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
				sender: 'valeria.postylyakova@yandex.ru',
				chatId: 1,
			},
			{
				id: 7,
				text: 'LAST MESSAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
				sender: 'anastasiabatrova@mail.ru',
				chatId: 1,
			},
			{
				id: 8,
				text: 'LAST MESSAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
				sender: 'valeria.postylyakova@yandex.ru',
				chatId: 1,
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Token" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Chat" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Message" RESTART IDENTITY CASCADE`
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
