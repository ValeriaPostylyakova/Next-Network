import { User } from '@prisma/client'

export class UserDTO {
	email
	id
	isActivated

	constructor(user: User) {
		this.email = user.email
		this.id = user.id
		this.isActivated = user.isActivated
	}
}
