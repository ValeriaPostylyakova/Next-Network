import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'

export interface InitiateState {
	user: TProfile | null
	isAuth: boolean
	status: Status
}
