import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { UserDTO } from '../dtos/user-dto'
import { EmailService } from './email-service'
import { TokenService } from './token-service'

const emailService = new EmailService()
const tokenServise = new TokenService()
const prisma = new PrismaClient()

export class UserService {
	async registration(email: string, password: string) {
		const findUser = await prisma.user.findFirst({
			where: {
				email: email,
			},
		})

		if (findUser) {
			throw new Error('Пользователь с такой почтой уже существует')
		}

		const activationLink = uuidv4()

		const user = await prisma.user.create({
			data: {
				email: email,
				password: bcrypt.hashSync(password, 5),
				activationLink: activationLink,
			},
		})

		const userDTO = new UserDTO(user)
		const tokens = tokenServise.generateTokens({ ...userDTO })
		await tokenServise.saveToken(userDTO.id, tokens.refreshToken)
		await emailService.sendActivationEmail(email, activationLink)

		return {
			...tokens,
			user: userDTO,
		}
	}
}
