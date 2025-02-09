import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'

export interface InitialState {
	users: TProfile[]
	status: Status
	error: unknown | null
}
