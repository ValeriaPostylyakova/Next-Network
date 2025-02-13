import { FriendsService } from '../services/friends-controller'

const friendsService = new FriendsService()

export class FriendsController {
	async getFriendsSuggetion(req: any, res: any) {
		try {
			const response = await friendsService.getFriendsSuggetion()
			return res.status(200).json(response)
		} catch (e) {
			res.status(400)
			console.error(e)
		}
	}
}
