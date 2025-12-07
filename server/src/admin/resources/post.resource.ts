import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('Post'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Контент', icon: 'Document' },
		sort: { sortBy: 'createdAt', direction: 'desc' },
		listProperties: ['id', 'fullname', 'userId', 'likes', 'createdAt'],
		showProperties: [
			'id',
			'text',
			'date',
			'fullname',
			'jobTitle',
			'likes',
			'like',
			'userId',
			'createdAt',
			'updatedAt',
		],
		editProperties: [
			'text',
			'date',
			'fullname',
			'jobTitle',
			'postImageUrl',
			'userImageUrl',
			'userId',
		],
		filterProperties: ['userId', 'date', 'fullname'],
	},
})
