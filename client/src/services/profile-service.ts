import { api } from '@/http/axios'
import { Chat, Friend, Post, StoryItem } from '@/redux/profile/types'

export interface IProfile {
	id: number
	fullname: string
	email: string
	posts?: Post[]
	stories?: StoryItem[]
	friend?: Friend[]
	chats?: Chat[]
}

export const ProfileService = {
	async profile(indificator: string) {
		return api.get('/profile/:id', { params: { id: indificator } })
	},
}
