import { PrismaClient } from '@prisma/client'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import path from 'path'
import { Server } from 'socket.io'
import { routers } from './router/index'
import { ChatService } from './services/chat-service'

const app = express()

dotenv.config()
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/images/posts', express.static(path.join(__dirname, 'posts')))
app.use('/images/avatar', express.static(path.join(__dirname, 'avatar')))

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
)
app.use('/api', routers)

const https = createServer(app)
const prisma = new PrismaClient()
const io = new Server(https, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
})

const chatService = new ChatService()

io.on('connection', socket => {
	console.log('User connected', socket.id)

	socket.on('chat_message', async data => {
		try {
			const message = await chatService.createMessage(data)
			socket.emit('new_message', message)
			socket.broadcast.emit('new_message', message)
		} catch (e) {
			console.error(e)
		}
	})

	socket.on('isReadMessage', async id => {
		try {
			await prisma.message.update({
				where: {
					id: Number(id),
				},
				data: {
					isRead: true,
				},
			})

			socket.emit('resIsReadMessage', id)
			socket.broadcast.emit('resIsReadMessage', id)
		} catch (e) {
			console.error(e)
		}
	})

	socket.on('onlineUsers', async (userId: string) => {
		try {
			const session = await prisma.session.create({
				data: {
					userId: Number(userId),
					socketId: socket.id,
				},
			})

			if (session.socketId) {
				const user = await prisma.user.update({
					where: {
						id: Number(session.userId),
					},
					data: {
						isOnline: 'online',
					},
				})

				socket.broadcast.emit('resOnlineUsers', user)
				socket.emit('resOnlineUsers', user)
			}
		} catch (e) {
			console.error(e)
		}
	})

	socket.on('typing', data => {
		socket.broadcast.emit('resTyping', data)
	})

	socket.on('disconnect', async () => {
		console.log(`User disconnected ${socket.id}`)
		const date = new Date()
		const lastOnlineTime = date.toLocaleTimeString('UTC', {
			month: 'short',
			hour: '2-digit',
			day: '2-digit',
			minute: '2-digit',
		})

		const session = await prisma.session.findUnique({
			where: {
				socketId: socket.id,
			},
		})

		if (session) {
			await prisma.user.update({
				where: {
					id: session.userId,
				},
				data: {
					isOnline: `был(a) в сети в ${lastOnlineTime}`,
				},
			})
		}
	})
})

const start = () => {
	try {
		https.listen(process.env.PORT || 4200, () => {
			console.log(`Server started on ${process.env.PORT} port`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()
