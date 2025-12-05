import { FriendsService } from '../services/friends-service'
import { Request, Response } from 'express'

const friendsService = new FriendsService()

export class FriendsController {
	async getFriendsSuggetion(req: Request, res: Response): Promise<any> {
		try {
			const response = await friendsService.getFriendsSuggetion()
			return res.status(200).json(response)
		} catch (e) {
			res.status(400)
			console.error(e)
		}
	}
}
