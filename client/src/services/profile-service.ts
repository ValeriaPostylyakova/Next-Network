import { api } from '@/http/axios'

export interface IProfile {
	id: number
	fullname: string
	email: string
}

export class ProfileService {
	static async profileInfo(id: string) {
		return api.get<IProfile>(`/profile/${id}`)
	}
}
