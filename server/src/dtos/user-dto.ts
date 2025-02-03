import { User } from '@prisma/client'

export class UserDTO {
	id
	email
	isActivated
	firstname
	identifier
	lastname

	constructor(user: User) {
		this.email = user.email
		this.id = user.id
		this.isActivated = user.isActivated
		this.firstname = user.firstname
		this.lastname = user.lastname
		this.identifier = user.identifier
	}
}
