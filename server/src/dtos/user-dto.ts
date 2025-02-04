import { User } from '@prisma/client'

export class UserDTO {
	id
	email
	isActivated
	firstname
	identifier
	lastname
	imageUrl
	jobTitle
	phone

	constructor(user: User) {
		this.email = user.email
		this.id = user.id
		this.isActivated = user.isActivated
		this.firstname = user.firstname
		this.lastname = user.lastname
		this.identifier = user.identifier
		this.imageUrl = user.imageUrl || null
		this.jobTitle = user.jobTitle || null
		this.phone = user.phone || null
	}
}
