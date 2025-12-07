import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('Session'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Пользователи', icon: 'Connected' },
		listProperties: ['id', 'userId', 'socketId', 'createdAt'],
		showProperties: ['id', 'userId', 'socketId', 'createdAt', 'updatedAt'],
		editProperties: ['userId', 'socketId'],
		filterProperties: ['userId', 'socketId'],
	},
})
