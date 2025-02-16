import { StoriesService } from '../services/stories-service'

const storiesService = new StoriesService()

export class StoriesController {
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
