import { ProfileActions } from '@/redux/profile/async-actions'
import { AppDispatch } from '@/redux/store'
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
	const profileActions = new ProfileActions()

	try {
		const formData = new FormData()
		formData.append('text', text)
		formData.append('post', imgUrl)

		dispatch(profileActions.createPost(formData)).then(data => {
			handleClose()
			setSelectedImage(null)
			setText('')
			toast.success('Пост успешно создан!')
		})
	} catch (error) {
		toast.error('Ошибка при создании поста')
		console.log(error)
	}
}
