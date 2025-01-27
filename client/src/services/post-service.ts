import { api } from '@/http/axios'

export class PostService {
	static async updateLikes(id: string) {
		return api.patch(`/updatePost/${id}`)
	}
}
