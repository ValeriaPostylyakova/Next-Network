import { PostActions } from '@/redux/post/async-action'
import { AppDispatch } from '@/redux/store'
import { unwrapResult } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

export const useCreatePost = async (
	text: string,
	imgUrl: string,
	setSelectedImage: (value: string | null) => void,
	setText: (value: string) => void,
	handleClose: () => void
) => {
	const dispatch: AppDispatch = useDispatch()
	const postActions = new PostActions()

	try {
		const formData = new FormData()
		formData.append('text', text)
		formData.append('post', imgUrl)

		const resultAction = await dispatch(postActions.createPost(formData))
		unwrapResult(resultAction)
		handleClose()
		setSelectedImage(null)
		setText('')
		toast.success('Пост успешно создан!')
	} catch (error) {
		toast.error('Ошибка при создании поста')
		console.log(error)
	}
}
