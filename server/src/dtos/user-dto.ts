import { User } from '@prisma/client'

export class UserDTO {
	id
	email
	isActivated
	fullname

	constructor(user: User) {
		this.email = user.email
		this.id = user.id
		this.isActivated = user.isActivated
		this.fullname = user.fullname
	}
}
