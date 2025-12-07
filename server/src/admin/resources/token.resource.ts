import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('Token'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Пользователи', icon: 'Key' },
		listProperties: ['id', 'userId', 'isActivated', 'createdAt'],
		showProperties: [
			'id',
			'userId',
			'refreshToken',
			'isActivated',
			'createdAt',
			'updatedAt',
		],
		editProperties: ['isActivated'],
		filterProperties: ['userId', 'isActivated'],
	},
})
