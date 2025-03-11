import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const renderFileImage = (
	event: ChangeEvent<HTMLInputElement>,
	setImage: Dispatch<SetStateAction<File | null>>,
	setSelectedImages: Dispatch<SetStateAction<string | null>>
): void => {
	const file = event.target.files?.[0]
	setImage(file as File)

	if (file) {
		const reader = new FileReader()
		reader.onload = e => {
			setSelectedImages(e.target?.result as string)
		}
		reader.readAsDataURL(file)
	}
}
