import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'

export interface InitiateState {
	user: TProfile
	updateUser: Status
	isAuth: boolean
	status: Status
}
