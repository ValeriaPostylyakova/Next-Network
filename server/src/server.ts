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
const io = new Server(https, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
})

const chatService = new ChatService()

io.on('connection', socket => {
	console.log(`User connected ${socket.id}, socket.io`)

	socket.on('chat_message', async data => {
		try {
			const message = await chatService.createMessage(data)
			socket.emit('new_message', message)
			socket.broadcast.emit('new_message', message)
		} catch (e) {
			console.error(e)
		}
	})

	socket.on('disconnect', () => {
		console.log(`User disconnected ${socket.id}`)
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
