import { api } from '@/http/axios'
import { TProfile } from '../../@types/profile'

export class FriendsService {
	static async getFriendsSuggestions() {
		return api.get<TProfile[]>(`/friendsSuggestions`)
	}
}
