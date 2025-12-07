import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('Story'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Контент', icon: 'Chat' },
		listProperties: ['id', 'fullname', 'userId', 'createdAt'],
		showProperties: [
			'id',
			'fullname',
			'imageUrl',
			'userId',
			'createdAt',
			'updatedAt',
		],
		editProperties: ['fullname', 'imageUrl', 'userId'],
		filterProperties: ['userId'],
	},
})
