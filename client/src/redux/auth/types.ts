import { TUser } from '@/services/auth-service'

export interface InitiateState {
	user: TUser | undefined
	isAuth: boolean
	status: Status
}

export enum Status {
	LOADIND = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}
