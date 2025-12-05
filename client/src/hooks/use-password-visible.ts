import { useState } from 'react'

export const usePasswordVisibility = () => {
	const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

	const togglePasswordVisibility = () => {
		setVisiblePassword(prev => !prev)
	}

	return { visiblePassword, togglePasswordVisibility }
}
