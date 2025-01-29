import { api } from '@/http/axios'
import { Post } from '@/redux/profile/types'

export class PostService {
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
	static async addLikes(id: string) {
		return api.patch(`/addPostLike/${id}`)
	}

	static async removeLikes(id: string) {
		return api.patch(`/removePostLike/${id}`)
	}

	static async comments(id: string) {
		return api.get(`/postComments/${id}`)
	}
}
