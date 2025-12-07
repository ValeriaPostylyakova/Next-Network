import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('Comment'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Контент', icon: 'Chat' },
		listProperties: ['id', 'username', 'postId', 'userId', 'createdAt'],
		showProperties: [
			'id',
			'username',
			'userImgUrl',
			'text',
			'postId',
			'userId',
			'date',
			'createdAt',
			'updatedAt',
		],
		editProperties: ['username', 'text'],
		filterProperties: ['postId', 'userId', 'username'],
	},
})
