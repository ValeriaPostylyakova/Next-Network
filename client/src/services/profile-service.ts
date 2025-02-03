import { api } from '@/http/axios'
import { TProfile } from '../../@types/profile'

export class ProfileService {
	static async profileInfo(id: string) {
		return api.get<TProfile>(`/profile/${id}`)
	}

	static async updateProfileInfo(
		id: number,
		firstname: string,
		lastname: string,
		jobTitle: string,
		identifier: string
	) {
		return api.patch<TProfile>(`/updateProfile`, {
			id: id,
			firstname: firstname,
			lastname,
			jobTitle,
			identifier,
		})
	}
}
