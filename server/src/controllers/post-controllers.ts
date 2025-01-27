import { PostService } from './../services/post-service'
const postService = new PostService()

export class PostControllers {
	async updatePostLikes(req: any, res: any) {
		try {
			const { id } = req.params
			const post = await postService.update(id)
			return res.status(200).json(post)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при загрузке поста' })
		}
	}
}
