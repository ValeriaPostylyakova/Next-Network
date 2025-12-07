import { Request, Response } from 'express'
import { SearchService } from '../services/search-service.js'

const searchService = new SearchService()

export class SearchController {
	async search(req: Request, res: Response): Promise<any> {
		try {
			const { query } = req.query
			const response = await searchService.search(query as string)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при поиске пользователя' })
			console.error(e)
		}
	}
}
