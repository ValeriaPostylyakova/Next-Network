export type TStoryItem = {
	id: number
	imageUrl: string
	storyId?: number
}

export type TStory = {
	id: number
	imageUrl: string
	fullname: string
	items: TStoryItem[]
	userId: number
}
