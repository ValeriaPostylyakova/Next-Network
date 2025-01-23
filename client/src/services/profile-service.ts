import { api } from '@/http/axios'
import { Post } from '@/redux/profile/types'

export interface IProfile {
	id: number
	fullname: string
	email: string
}

export const ProfileService = {
	async profileInfo(indificator: string) {
		return api.get<IProfile>(`/profile/${indificator}`)
	},

	async posts(id: number) {
		return api.get<Post[]>(`/posts/${id}`)
	},
}
