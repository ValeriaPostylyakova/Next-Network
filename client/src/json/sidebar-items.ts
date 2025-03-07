import { ISidebarItem } from '../../@types/sidebar-items'

export const sidebarItems: ISidebarItem[] = [
	{
		text: 'Главная',
		icons: <House />,
		link: 'feed',
	},
	{
		text: 'Чаты',
		icons: <MessagesSquare />,
		link: 'messages',
	},
	{
		text: 'Настройки',
		icons: <Settings />,
		link: 'settings',
	},
]
