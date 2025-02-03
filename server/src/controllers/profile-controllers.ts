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

	async updateProfileInfo(req: any, res: any) {
		try {
			const { id, firstname, lastname, identifier, jobTitle } = req.body
			const response = await profileService.update(
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
}
