import { Request } from 'express'
import { ProfileService } from '../services/profile-service'

const profileService = new ProfileService()

export class ProfileControllers {
	async profileInfo(req: any, res: any) {
		try {
			const { id } = req.params
			const response = await profileService.profile(id)
			return res.status(200).json(response)
		} catch (e) {
			res
				.status(400)
				.json({ message: 'Ошибка при получении информации о профиле' })
			console.log(e)
		}
	}

	async posts(req: any, res: any) {
		try {
			const { id } = req.params
			const posts = await profileService.posts(id)

			return res.status(200).json(posts)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при получении постов' })
		}
	}

	async createPost(req: Request, res: any) {
		try {
			const { refreshToken } = req.cookies
			const textData = req.body.text
			const fileData = req.file?.path

			const post = await profileService.createPost(
				refreshToken,
				textData,
				fileData
			)

			return res.status(200).json(post)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при создании поста' })
		}
	}
}
