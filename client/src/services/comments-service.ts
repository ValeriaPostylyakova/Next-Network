import { api } from '@/http/axios'
import { Comment } from '@/redux/comments/type'

export class CommentsService {
	static async create(
		id: number,
		username: string,
		userImgUrl: string | undefined,
		text: string
	) {
		return api.post<Comment>('/comment', { id, username, userImgUrl, text })
	}
}
