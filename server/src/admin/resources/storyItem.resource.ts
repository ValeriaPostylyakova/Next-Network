import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('StoryItem'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Контент', icon: 'Chat' },
		listProperties: ['id', 'storyId', 'imageUrl', 'expiresAt'],
		showProperties: [
			'id',
			'storyId',
			'imageUrl',
			'expiresAt',
			'createdAt',
			'updatedAt',
		],
		editProperties: ['storyId', 'imageUrl', 'expiresAt'],
		filterProperties: ['storyId'],
	},
})
