import { User } from '@prisma/client'

export class UserDTO {
	id
	email
	isActivated
	fullname
	identifier

	constructor(user: User) {
		this.email = user.email
		this.id = user.id
		this.isActivated = user.isActivated
		this.fullname = user.fullname
		this.identifier = user.identifier
	}
}
