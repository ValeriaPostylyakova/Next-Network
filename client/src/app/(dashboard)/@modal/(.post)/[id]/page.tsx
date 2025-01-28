import { ModalFormUI } from '@/components/ui'
import { Box } from 'lucide-react'

const PostModalPage = async ({
	params: { id },
}: {
	params: { id: string }
}) => {
	console.log(id)

	return (
		<ModalFormUI
			buttonText='Сохранить'
			dialogTitle='Редактирование поста'
			open={true}
			handleClose={() => {}}
		>
			<Box>Post Page Modal</Box>
		</ModalFormUI>
	)
}

export default PostModalPage
