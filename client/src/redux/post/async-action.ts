import { createAsyncThunk } from '@reduxjs/toolkit'
import { PostService } from './../../../../server/src/services/post-service'

const postService = new PostService()

export class PostActions {
	updateLikes = createAsyncThunk('post/updateLikes', async (id: string) => {
		const post = await postService.update(id)
		return post
	})
}
