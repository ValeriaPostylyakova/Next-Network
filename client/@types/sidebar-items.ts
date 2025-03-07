import { ReactNode } from 'react'

export interface ISidebarItem {
	text: string
	icons: ReactNode
	link: string
	count?: number
}
