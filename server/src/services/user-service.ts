import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { UserDTO } from './../dtos/user-dto'

import { EmailService } from './email-service'
import { TokenService } from './token-service'

const emailService = new EmailService()
const tokenServise = new TokenService()
const prisma = new PrismaClient()

export class UserService {
	async registration(
		email: string,
		password: string,
		firstname: string,
		lastname: string
	) {
		const findUser = await prisma.user.findFirst({
			where: {
				email: email,
			},
		})

		if (findUser) {
			throw new Error('Пользователь с такой почтой уже существует')
		}

		const activationLink = uuidv4()
		const identifier = String(email.slice(0, 5))

		const user = await prisma.user.create({
			data: {
				email: email,
				password: bcrypt.hashSync(password, 5),
				firstname: firstname,
				lastname: lastname,
				imageUrl: null,
				jobTitle: null,
				phone: null,
				activationLink: activationLink,
				identifier: identifier,
			},
		})

		const userDTO = new UserDTO(user)
		const tokens = tokenServise.generateTokens({ ...userDTO })
		await tokenServise.saveToken(userDTO.id, tokens.refreshToken)
		await emailService.sendActivationEmail(
			email,
			`${process.env.API_URL}/api/activate/${activationLink}`
		)

		return {
			...tokens,
			user: userDTO,
		}
	}

	async activate(activationLink: string) {
		const user = await prisma.user.findFirst({
			where: {
				activationLink: activationLink,
			},
		})

		if (!user) {
			throw new Error('Некорректная ссылка активации')
		}

		await prisma.user.update({
			where: {
				id: user.id,
			},
			data: {
				isActivated: true,
			},
		})
	}
	async login(email: string, password: string) {
		const findUser = await prisma.user.findFirst({
			where: {
				email: email,
			},
		})

		if (!findUser) {
			throw new Error('Пользователь не зарегистрирован')
		}

		const validatedPassword = bcrypt.compare(password, findUser.password)

		if (!validatedPassword) {
			throw new Error('Введен неверный пароль')
		}

		const userDTO = new UserDTO(findUser)

		const tokens = tokenServise.generateTokens({ ...userDTO })
		await tokenServise.saveToken(userDTO.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDTO,
		}
	}

	async logout(token: string) {
		const findRefToken = await prisma.token.findFirst({
			where: {
				refreshToken: token,
			},
		})

		const refToken = await tokenServise.deleteToken(findRefToken?.id)
		return refToken
	}

	async refresh(token: string) {
		if (!token) {
			throw new Error('Пользователь не зарегистрирован')
		}

		const userData = tokenServise.validateRefreshToken(token)
		const tokenFromDb = tokenServise.findToken(token)

		if (!userData || !tokenFromDb) {
			throw new Error('Пользователь не зарегистрирован')
		}

		const user = await prisma.user.findFirst({
			where: {
				id: userData.id,
			},
		})

		if (!user) {
			throw new Error('Пользователя не существует')
		}

		const userDTO = new UserDTO(user)
		const tokens = tokenServise.generateTokens({ ...userDTO })
		await tokenServise.saveToken(userDTO.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDTO,
		}
	}

	async update(
		id: string,
		firstname: string,
		lastname: string,
		jobTitle: string,
		identifier: string,
		phone: string,
		email: string,
		imageUrl: string
	) {
		const profile = await prisma.user.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!profile) {
			throw new Error('Такого профиля не существует')
		}

		if (
			firstname === profile.firstname &&
			lastname === profile.lastname &&
			jobTitle === profile.jobTitle &&
			identifier === profile.identifier &&
			phone === profile.phone &&
			email === profile.email &&
			imageUrl === profile.imageUrl
		) {
			return null
		}

		const newProfile = await prisma.user.update({
			where: {
				id: profile.id,
			},
			data: {
				firstname,
				lastname,
				jobTitle,
				identifier,
				phone,
				email,
				imageUrl,
			},
		})

		return newProfile
	}
}
