import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import {
	IGetUserParams,
	IUserRegistraytion,
	IUserUpdateInfo,
} from '../@types/user'
import { UserService } from '../services/user-service'
import { getUserFromToken } from '../utils/getUserFromToken'

const userService = new UserService()

export class UserControllers {
	async registration(
		req: Request<IUserRegistraytion>,
		res: Response
	): Promise<any> {
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
			res.status(400).json({
				message: 'Ошибка при регистрации',
			})
			console.log(e)
		}
	}

	async login(req: Request, res: Response): Promise<any> {
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

	async logout(req: Request, res: Response): Promise<any> {
		try {
			const refreshToken = req.cookies.refreshToken
			const token = await userService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)
		} catch (e) {
			console.log(e)
		}
	}

	async refresh(req: Request, res: Response, next: any): Promise<any> {
		try {
			const refreshToken = req.cookies.refreshToken
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

	async getProfile(req: Request, res: Response): Promise<any> {
		try {
			const userId = req.params.id

			const user = await getUserFromToken(userId)
			return res.status(200).json(user)
		} catch (e) {
			res
				.status(400)
				.json({ message: 'Ошибка при получении информации о профиле' })
			console.log(e)
		}
	}

	async updateProfileInfo(
		req: Request<IUserUpdateInfo>,
		res: Response
	): Promise<any> {
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

	async updateProfileInfoPhone(req: Request, res: Response): Promise<any> {
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

	async updateProfileInfoEmail(req: Request, res: Response): Promise<any> {
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

	async updateProfileInfoImageUrl(req: Request, res: Response): Promise<any> {
		try {
			const { id: profileId } = req.params
			const response = await userService.updateProfileInfoImageUrl(
				profileId,
				req.file?.filename as string
			)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при обновлении аватара' })
			console.log(e)
		}
	}

	async deleteAvatar(req: Request, res: Response): Promise<any> {
		try {
			const { id } = req.params

			const response = await userService.deleteAvatar(id)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при удалении аватара' })
			console.log(e)
		}
	}

	async getUser(req: Request<IGetUserParams>, res: Response): Promise<any> {
		try {
			const { id } = req.params
			const response = await userService.getUser(id)

			return res.status(200).json(response)
		} catch (e) {
			console.error(e)
			return res
				.status(400)
				.json({ message: 'Ошибка при получении пользователя' })
		}
	}

	async getUsers(req: Request, res: Response): Promise<any> {
		try {
			const refreshToken = req.cookies.refreshToken
			const response = await userService.getUsers(refreshToken)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400)
			console.error(e)
		}
	}
}
