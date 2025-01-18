import { TokenService } from '../services/token-service'
import { UserService } from '../services/user-service'

const userService = new UserService()
const tokenService = new TokenService()

export class UserControllers {
	async registration(req: any, res: any, next: any) {
		try {
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
