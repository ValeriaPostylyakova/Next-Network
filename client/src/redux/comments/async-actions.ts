import { CommentsService } from '@/services/comments-service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TParams } from './type'

export class CommentsActions {
	createComment = createAsyncThunk(
		'comments/fetchCreateComment',
		async (params: TParams) => {
			const { id, username, userImgUrl, text } = params

			const { data } = await CommentsService.create(
				id,
				username,
				userImgUrl,
				text
			)

			return data
		}
	)
}
