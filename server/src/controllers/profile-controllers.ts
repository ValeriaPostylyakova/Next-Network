import { ProfileService } from '../services/profile-service'

const profileService = new ProfileService()

export class ProfileControllers {
	async profile(req: any, res: any) {
		try {
			const { email } = req.body
			const userProfile = profileService.getProfile(email)
			return res.status(200).json(userProfile)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при получении профиля' })
			console.log(e)
		}
	}
}
