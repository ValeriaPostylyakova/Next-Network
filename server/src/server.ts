import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import { routers } from './router/index'

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

const start = () => {
	try {
		app.listen(process.env.PORT || 5000, () => {
			console.log(`Server started on ${process.env.PORT} port`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()
