import { Status } from '../../../@types/fetchStatus'
import { TProfile } from '../../../@types/profile'

export interface InitialState {
	profile: TProfile
	statusProfile: Status
}
