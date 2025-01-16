import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const prisma = new PrismaClient()

app.get('/users', async (req: Request, res: Response) => {
	const users = await prisma.user.findMany()
	res.json(users)
})

app.listen(process.env.PORT, () => {
	console.log(`Server started in 5000 port`)
})
