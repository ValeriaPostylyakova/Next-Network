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
			const { id, firstname, lastname, identifier, jobTitle } = req.body
			const response = await userService.update(
				id,
				firstname,
				lastname,
				jobTitle,
				identifier
			)
			return res.status(200).json(response)
		} catch (e) {
			res
				.status(400)
				.json({ message: 'Ошибка при получении информации о профиле' })
			console.log(e)
		}
	}

	async updateProfileInfoPhone(req: any, res: any) {
		try {
			const { id, phone } = req.body
			const response = await userService.updateProfileInfoPhone(id, phone)
			return res.status(200).json(response)
		} catch (e) {
			res
				.status(400)
				.json({ message: 'Ошибка при получении информации о номере телефона' })
			console.log(e)
		}
	}

	async updateProfileInfoEmail(req: any, res: any) {
		try {
			const { id, email } = req.body
			const response = await userService.updateProfileInfoEmail(id, email)
			return res.status(200).json(response)
		} catch (e) {
			res
				.status(400)
				.json({ message: 'Ошибка при получении информации о email' })
			console.log(e)
		}
	}

	async updateProfileInfoImageUrl(req: any, res: any) {
		try {
			const token = req.cookies.refreshToken
			const response = await userService.updateProfileInfoImageUrl(
				token,
				req.file?.path
			)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при обновлении аватара' })
			console.log(e)
		}
	}

	async deleteAvatar(req: any, res: any) {
		try {
			const { id } = req.params

			const response = await userService.deleteAvatar(id)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при удалении аватара' })
			console.log(e)
		}
	}

	async getUser(req: any, res: any) {
		try {
			const { id } = req.params
			const response = await userService.getUser(id)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400)
			console.error(e)
		}
	}

	async getUsers(req: any, res: any) {
		try {
			const { refreshToken } = req.cookies
			const response = await userService.getUsers(refreshToken)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400)
			console.error(e)
		}
	}
}
