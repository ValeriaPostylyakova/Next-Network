import { validationResult } from 'express-validator'
import { TokenService } from '../services/token-service'
import { UserService } from '../services/user-service'

const userService = new UserService()
const tokenService = new TokenService()

export class UserControllers {
	async registration(req: any, res: any, next: any) {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				throw new Error('Ошибка при валидации')
			}

			const { email, password } = req.body
			const userData = await userService.registration(email, password)
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})

			return res.status(200).json(userData)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при регистрации' })
			console.log(e)
		}
	}

	async login(req: any, res: any, next: any) {
		try {
			const { email, password } = req.body
			const userData = await userService.login(email, password)
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			return res.status(200).json(userData)
		} catch (e) {
			console.log(e)
		}
	}

	async logout(req: any, res: any, next: any) {
		try {
		} catch (e) {
			console.log(e)
		}
	}

	async activate(req: any, res: any, next: any) {
		try {
			const activationLink = req.params.link
			await userService.activate(activationLink)
			return res.redirect(process.env.CLIENT_URL)
		} catch (e) {
			console.log(e)
		}
	}

	async refresh(req: any, res: any, next: any) {
		try {
		} catch (e) {
			console.log(e)
		}
	}

	async getUsers(req: any, res: any, next: any) {
		try {
		} catch (e) {
			console.log(e)
		}
	}
}
