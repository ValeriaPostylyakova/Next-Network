import { Request, Response } from 'express'
import { StoriesService } from '../services/stories-service'

const storiesService = new StoriesService()

export class StoriesController {
	async createStory(req: Request, res: Response): Promise<any> {
		try {
			const { id: profileId } = req.params

			const fileName = req.file?.filename

			const response = await storiesService.createStory(
				profileId,
				fileName as string
			)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при создании истории' })
			console.error(e)
		}
	}

	async getStories(req: Request, res: Response): Promise<any> {
		try {
			const response = await storiesService.getStrories()
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при получении историй' })
			console.error(e)
		}
	}
}
