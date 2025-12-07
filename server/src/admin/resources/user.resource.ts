import { ResourceOptions } from 'adminjs'
import { ResourceDeps } from '../types.js'

export default ({ getModelByName, prisma }: ResourceDeps) => ({
	resource: { model: getModelByName('User'), client: prisma },
	options: <ResourceOptions>{
		navigation: { name: 'Пользователи', icon: 'User' },
		sort: { sortBy: 'createdAt', direction: 'desc' },
		listProperties: [
			'id',
			'email',
			'firstname',
			'lastname',
			'role',
			'isActivated',
			'createdAt',
		],
		showProperties: [
			'id',
			'email',
			'firstname',
			'lastname',
			'role',
			'isActivated',
			'phone',
			'jobTitle',
			'createdAt',
			'updatedAt',
		],
		editProperties: [
			'email',
			'firstname',
			'lastname',
			'role',
			'isActivated',
			'phone',
			'jobTitle',
			'imageUrl',
		],
		filterProperties: ['email', 'firstname', 'lastname', 'role', 'isActivated'],
		properties: {
			password: { isVisible: false },
			activationLink: { isVisible: false },
		},
	},
})
