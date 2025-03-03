import { StoriesService } from '../services/stories-service'

const storiesService = new StoriesService()

export class StoriesController {
	async createStory(req: any, res: any) {
		try {
			const fileName = req.file?.filename
			const { refreshToken } = req.cookies

			const response = await storiesService.createStory(refreshToken, fileName)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при создании истории' })
			console.error(e)
		}
	}

	async getStories(req: any, res: any) {
		try {
			const response = await storiesService.getStrories()
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при получении историй' })
			console.error(e)
		}
	}
}
