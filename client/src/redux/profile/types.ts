import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'

export type TParamsRegistration = {
	email: string
	password: string
	firstname: string
	lastname: string
}

export type TParamsLogin = {
	email: string
	password: string
}

export type TParams = {
	id: number
	firstname: string
	lastname: string
	identifier: string
	jobTitle: string
}

export type TParamsEmail = {
	id: number
	email: string
}

export type TParamsPhone = {
	id: number
	phone: string
}

export type TParamsImage = {
	image: File
}

export interface InitiateState {
	profile: TProfile
	isAuth: boolean
	statusUpdateUserInfo: Status
	status: Status
	statusUpdateUserEmail: Status
	statusUpdateUserPhone: Status
	statusUpdateUserImageUrl: Status
	statusDeleteAvatar: Status
}
