import { api } from '@/http/axios'
import { TProfile } from '../../@types/profile'

export class ProfileService {
	static async profileInfo(id: string) {
		return api.get<TProfile>(`/profile/${id}`)
	}
}
