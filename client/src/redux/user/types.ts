import { Status } from '../../../@types/fetchStatus'
import { TUser } from '../../../@types/user'

export interface InitialState {
	profile: TUser
	statusProfile: Status
	error: unknown | null
}
