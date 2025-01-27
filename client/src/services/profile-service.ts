import { api } from '@/http/axios'
import { Post } from '@/redux/profile/types'

export interface IProfile {
	id: number
	fullname: string
	email: string
}

export class ProfileService {
	static async profileInfo(id: string) {
		return api.get<IProfile>(`/profile/${id}`)
	}

	static async posts(id: string) {
		return api.get<Post[]>(`/posts/${id}`)
	}

	static async createPost(formData: FormData) {
		return api.post<Post>('/post', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}
}
