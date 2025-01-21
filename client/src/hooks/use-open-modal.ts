'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useOpenModal = () => {
	const router = useRouter()
	const [open, setOpen] = useState<boolean>(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return {
		open,
		setOpen,
		handleOpen,
		handleClose,
		router,
	}
}
