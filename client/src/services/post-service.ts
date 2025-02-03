import { api } from '@/http/axios'
import { Post } from '../../@types/post'

export class PostService {
	static async createPost(formData: FormData) {
		return api.post<Post>('/post', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	static async posts(id: string) {
		return api.get<Post[]>(`/posts/${id}`)
	}

	static async deletePost(id: number) {
		return api.delete(`/postDelete/${id}`)
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

	static async createComment(
		id: number,
		username: string,
		userImgUrl: string | undefined,
		text: string
	) {
		return api.post('/comment', { id, username, userImgUrl, text })
	}
}
