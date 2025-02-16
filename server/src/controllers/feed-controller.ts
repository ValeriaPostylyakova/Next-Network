import { FeedService } from '../services/feed-service'

const feedService = new FeedService()

export class FeedController {
	async getFeed(req: any, res: any) {
		try {
			const response = await feedService.getFeed()
			return res.status(200).json(response)
		} catch (e) {
			res.status(400).json({ message: 'Ошибка при получении ленты' })
			console.error(e)
		}
	}
}
