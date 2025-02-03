import { TProfile } from '../../../@types/profile'
import { Status } from '../auth/types'

export interface InitialState {
	profileInfo: TProfile | null
	statusProfileInfo: Status
	updateProfileStatus: Status
}
