export interface IGetUserParams {
	id: string
}

export interface IUserRegistraytion {
	email: string
	password: string
	firstname: string
	lastname: string
}

export interface IUserUpdateInfo {
	id: string
	firstname: string
	lastname: string
	jobTitle: string
	identifier: string
}
