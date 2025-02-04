import { validationResult } from 'express-validator'
import { UserService } from '../services/user-service'

const userService = new UserService()

export class UserControllers {
	async registration(req: any, res: any) {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				throw new Error('Ошибка при валидации')
			}

			const { email, password, firstname, lastname } = req.body
			const userData = await userService.registration(
				email,
				password,
				firstname,
				lastname
			)
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

	async login(req: any, res: any) {
		try {
			const { email, password } = req.body
			const userData = await userService.login(email, password)
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			return res.status(200).json(userData)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при авторизации' })
			console.log(e)
		}
	}

	async logout(req: any, res: any) {
		try {
			const { refreshToken } = req.cookies
			const token = await userService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)
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
			const { refreshToken } = req.cookies
			const userData = await userService.refresh(refreshToken)
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})

			return res.status(200).json(userData)
		} catch (e) {
			console.log(e)
		}
	}

	async updateProfileInfo(req: any, res: any) {
		try {
			const {
				id,
				firstname,
				lastname,
				identifier,
				jobTitle,
				phone,
				email,
				imageUrl,
			} = req.body
			const response = await userService.update(
				id,
				firstname,
				lastname,
				jobTitle,
				identifier,
				phone,
				email,
				imageUrl
			)
			return res.status(200).json(response)
		} catch (e) {
			res
				.status(400)
				.json({ message: 'Ошибка при получении информации о профиле' })
			console.log(e)
		}
	}
}
