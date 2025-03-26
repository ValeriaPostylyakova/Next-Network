import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function up() {
	// await prisma.user.createMany({
	// 	data: [
	// 		{
	// 			email: 'valeria.postylyakova@yandex.ru',
	// 			password: bcrypt.hashSync('postylyakovavs107', 7),
	// 			isActivated: false,
	// 			firstname: 'Валерия',
	// 			lastname: 'Постылякова',
	// 			identifier: 'valeriapostylyakova',
	// 			jobTitle: 'Frontend Developer',
	// 			imageUrl:
	// 				'https://sun9-31.userapi.com/impg/TVI3Ieil8CnHuLfFgv7WXHxoODTjRyD5XO-4sg/kY_6WrJhRbY.jpg?size=1623x2160&quality=95&sign=cdb1c07a7b2a7e2fc93359824349d5c3&type=album',
	// 		},
	// 		{
	// 			email: 'ivanov@gmail.com',
	// 			password: bcrypt.hashSync('ivanov53465346', 7),
	// 			isActivated: true,
	// 			firstname: 'Иванов',
	// 			lastname: 'Даниил',
	// 			identifier: 'ivanov11',
	// 			jobTitle: 'Web Developer',
	// 			imageUrl:
	// 				'https://img.freepik.com/free-vector/hand-drawn-clothes-person_79603-614.jpg',
	// 		},
	// 		{
	// 			email: 'postj886@mail.ru',
	// 			password: bcrypt.hashSync('gh43j5kg4hgk', 7),
	// 			isActivated: true,
	// 			firstname: 'Кристина',
	// 			lastname: 'Разина',
	// 			identifier: 'yourname123',
	// 			jobTitle: 'Designer',
	// 			imageUrl:
	// 				'https://shapka-youtube.ru/wp-content/uploads/2021/03/prikolnaya-kartinka-na-avu-dlya-patsanov.jpg',
	// 		},
	// 		{
	// 			email: 'romanov8785@gmail.com',
	// 			password: bcrypt.hashSync('fj5vldsqv2blfutr464', 7),
	// 			isActivated: false,
	// 			firstname: 'Егор',
	// 			lastname: 'Романов',
	// 			identifier: 'romanov8785',
	// 			jobTitle: 'Chief Information Security Officer',
	// 			imageUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
	// 		},
	// 	],
	// })
	// await prisma.token.createMany({
	// 	data: [
	// 		{
	// 			refreshToken:
	// 				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzM0BtYWlsLnJ1IiwiaWQiOjIwLCJpc0FjdGl2YXRlZCI6ZmFsc2UsImZ1bGxuYW1lIgjxVGVzdCBUZXN0IiwiaWRlbnRpZmllciI6InRlc3QzIiwiaWF0IjoxNzM3NjM2MDY4LCJleHAiOjE3NDAyMjgwNjh9.vT-kL91NlmPykAu9_gh96Se5wuEXuj-CH9wShelnP4C',
	// 			userId: 1,
	// 		},
	// 		{
	// 			refreshToken:
	// 				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzM0bcvbctYWlsLnJ1IiwiaWQiOjIwLCJpc0FjdGl2YXRlZCI6ZmFsc2UsImZ1bGxuYW1lIgjxVGVzhghBUZXN0IiwiaWRlbnRpZmllciI6InRlc3QzIiwiaWF0IjoxNzM3NjM2MDY4LCJleHAiOjE3NDAyMjgwNjh9.vT-kL91NlmPykAu9_gh96Se5wuEXuj-CH9wShedgdsBfs2M',
	// 			userId: 2,
	// 		},
	// 		{
	// 			refreshToken:
	// 				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzM0BtYWlsLnJ1IihfdhdWQiOjIwLCJpc0FjdGl2YXRlZCI6ZmFsc2UsImZ1bGxuYW1lIgjxVGVzdCBUZXN0IiwiaWRlbnRpZmllciI6InRlc3QzIiwiaWF0IjoxNzM3NjM2MDY4LCJleHAiOjE3NDAyMjgwNjh9.vT-kL91NlmPykAu9_gh96Se5wuEXuj-CH9wShelhkhk5FK',
	// 			userId: 3,
	// 		},
	// 		{
	// 			refreshToken:
	// 				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzM0BtYWlsLnJ1IiwiaWQiOjIwLCsgfhc0FjdGl2YXRlZCI6ZmFsc2UsImZ1bGxuYW1lIgjxVGVzdCBUZXN0IiwiaWRlbnRpZmllciI6InRlc3QzIiwiaWF0IjoxNzM3NjM2MDY4LCJjfgjHAiOjE3NDAyMjgwNjh9.vT-kL91NlmPykAu9_gh96Se5wuEXuj-CH9wShemfD9V',
	// 			userId: 4,
	// 		},
	// 	],
	// })
	// await prisma.post.createMany({
	// 	data: [
	// 		{
	// 			postImageUrl:
	// 				'https://cfmoto-moto.ru/wp-content/uploads/2022/11/image5.jpg',
	// 			fullname: 'Валерия Постылякова',
	// 			jobTitle: 'Frontend Developer',
	// 			userImageUrl:
	// 				'https://sun9-31.userapi.com/impg/TVI3Ieil8CnHuLfFgv7WXHxoODTjRyD5XO-4sg/kY_6WrJhRbY.jpg?size=1623x2160&quality=95&sign=cdb1c07a7b2a7e2fc93359824349d5c3&type=album',
	// 			likes: 20,
	// 			date: '10 февр. 2025 г., 19:27',
	// 			userId: 1,
	// 		},
	// 		{
	// 			postImageUrl:
	// 				'https://printwalls.ru/assets/cache_image/products/2309/fotooboi-priroda-lesa-kupit-0149_846x550_c8f.jpg',
	// 			fullname: 'Кристина Разина',
	// 			jobTitle: 'Designer',
	// 			userImageUrl:
	// 				'https://shapka-youtube.ru/wp-content/uploads/2021/03/prikolnaya-kartinka-na-avu-dlya-patsanov.jpg',
	// 			likes: 2,
	// 			userId: 3,
	// 			date: '25 янв. 2025 г., 14:30',
	// 		},
	// 		{
	// 			postImageUrl:
	// 				'https://iy.kommersant.ru/Issues.photo/RADIO/2022/05/17/KSP_015476_00003_1_t222_144858.jpg',
	// 			fullname: 'Егор Романов',
	// 			jobTitle: 'Chief Information Security Officer',
	// 			userImageUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
	// 			likes: 10,
	// 			userId: 4,
	// 			date: '20 дек. 2024 г., 10:15',
	// 		},
	// 	],
	// })
	// await prisma.message.createMany({
	// 	data: [
	// 		{
	// 			text: 'test message',
	// 			sender: '3',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'tLorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil citationem?',
	// 			sender: '4',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'Lorem ipsum dolor sit ',
	// 			sender: '4',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'test message Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
	// 			sender: '4',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'LAST MESSAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
	// 			sender: '4',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
	// 			sender: '3',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'LAST MESSAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
	// 			sender: '4',
	// 			chatId: 1,
	// 		},
	// 		{
	// 			text: 'LAST MESSAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, unde voluptatibus nihil saepe quaerat esse ipsam voluptates itaque adipisci at, sed reprehenderit ad necessitatibus officiis. Sapiente provident aliquid maxime exercitationem?',
	// 			sender: '3',
	// 			chatId: 1,
	// 		},
	// 	],
	// })
	// await prisma.story.createMany({
	// 	data: [
	// 		{
	// 			imageUrl:
	// 				'https://sun9-31.userapi.com/impg/TVI3Ieil8CnHuLfFgv7WXHxoODTjRyD5XO-4sg/kY_6WrJhRbY.jpg?size=1623x2160&quality=95&sign=cdb1c07a7b2a7e2fc93359824349d5c3&type=album',
	// 			fullname: 'Валерия',
	// 			userId: 3,
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://img.freepik.com/free-vector/hand-drawn-clothes-person_79603-614.jpg',
	// 			fullname: 'Кирилл',
	// 			userId: 1,
	// 		},
	// 	],
	// })
	// await prisma.storyItem.createMany({
	// 	data: [
	// 		{
	// 			imageUrl:
	// 				'https://i.pinimg.com/736x/14/d5/73/14d5735f4cd9c90fff1edb054cc6cbfb.jpg',
	// 			storyId: 1,
	// 			expiresAt: new Date(Date.now() + 2 * 60 * 1000),
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://i.pinimg.com/736x/30/25/86/302586d8789577e220133514e3316f6b.jpg',
	// 			storyId: 1,
	// 			expiresAt: new Date(Date.now() + 2 * 60 * 1000),
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://i.pinimg.com/736x/aa/8d/02/aa8d02164803eb19b6727eaa3a1a3c4a.jpg',
	// 			storyId: 1,
	// 			expiresAt: new Date(Date.now() + 2 * 60 * 1000),
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://i.pinimg.com/736x/81/30/6c/81306cc82e987fc640af2e9e5bdb142a.jpg',
	// 			storyId: 3,
	// 			expiresAt: new Date(Date.now() + 2 * 60 * 1000),
	// 		},
	// 		{
	// 			imageUrl:
	// 				'https://i.pinimg.com/736x/6e/a5/65/6ea56593fdb1ff7850c0898fe406e85a.jpg',
	// 			storyId: 3,
	// 			expiresAt: new Date(Date.now() + 2 * 60 * 1000),
	// 		},
	// 	],
	// })
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Token" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Chat" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ChatUser" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Message" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Session" RESTART IDENTITY CASCADE`
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
