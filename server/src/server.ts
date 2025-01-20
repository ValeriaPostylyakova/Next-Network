import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { routers } from './router/index'

const app = express()
dotenv.config()

app.use(express.json())
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
