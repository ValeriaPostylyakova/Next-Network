import { SearchService } from '../services/search-service'

const searchService = new SearchService()

export class SearchController {
	async search(req: any, res: any) {
		try {
			const { query } = req.query
			const response = await searchService.search(query)
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при поиске пользователя' })
			console.error(e)
		}
	}
}
