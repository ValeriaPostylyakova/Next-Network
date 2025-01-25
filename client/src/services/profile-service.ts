import { api } from '@/http/axios'
import { Post } from '@/redux/profile/types'

export interface IProfile {
	id: number
	fullname: string
	email: string
}

export const ProfileService = {
	async profileInfo(id: string) {
		return api.get<IProfile>(`/profile/${id}`)
	},

	async posts(id: string) {
		return api.get<Post[]>(`/posts/${id}`)
	},

	async createPost(id: string) {
		return api.post<Post>('/post', { id })
	},
}
