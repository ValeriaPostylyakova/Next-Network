import { ProfileService } from '../services/profile-service'

const profileService = new ProfileService()

export class ProfileControllers {
	async profile(req: any, res: any) {
		try {
			const { id } = req.params
			const response = await profileService.profile(id)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при получении профиля' })
			console.log(e)
		}
	}
}
