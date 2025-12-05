export type TProfile = {
	id: number
	isOnline: string | null
	email: string
	password: string
	isActivated: boolean
	activationLink?: string
	firstname: string
	imageUrl?: string
	lastname: string
	identifier: string
	jobTitle?: string
	phone: string
}
