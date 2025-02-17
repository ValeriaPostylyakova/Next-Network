import { PostService } from './../services/post-service'
const postService = new PostService()

export class PostControllers {
	async addPostLike(req: any, res: any) {
		try {
			const { id } = req.params
			const post = await postService.addLike(id)
			return res.status(200).json(post)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при загрузке поста' })
		}
	}

	async removePostLike(req: any, res: any) {
		try {
			const { id } = req.params
			const post = await postService.removeLike(id)
			return res.status(200).json(post)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при загрузке поста' })
		}
	}

	async posts(req: any, res: any) {
		try {
			const { id } = req.params
			const posts = await postService.posts(id)

			return res.status(200).json(posts)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при получении постов' })
		}
	}

	async createPost(req: any, res: any) {
		try {
			const { refreshToken } = req.cookies
			const textData = req.body.text
			const fileData = req.file?.filename

			const post = await postService.createPost(
				refreshToken,
				textData,
				fileData
			)

			return res.status(200).json(post)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при создании поста' })
		}
	}

	async comments(req: any, res: any) {
		try {
			const { id, text, userImgUrl, username } = req.body
			const comments = await postService.comments(
				id,
				text,
				username,
				userImgUrl
			)
			return res.status(200).json(comments)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при получении комментариев' })
		}
	}

	async deletePost(req: any, res: any) {
		try {
			const { id } = req.params
			const post = await postService.deletePost(id)
			return res.status(200).json(post)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Ошибка при удалении поста' })
		}
	}
}
