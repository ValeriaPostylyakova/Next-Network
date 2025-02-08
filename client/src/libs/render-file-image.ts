import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const renderFileImage = (
	event: ChangeEvent<HTMLInputElement>,
	setImage: Dispatch<SetStateAction<File | undefined>>,
	setSelectedImages: Dispatch<SetStateAction<string | null>>
): void => {
	const file = event.target.files?.[0]
	setImage(file)

	if (file) {
		const reader = new FileReader()
		reader.onload = e => {
			setSelectedImages(e.target?.result as string)
		}
		reader.readAsDataURL(file)
	}
}
