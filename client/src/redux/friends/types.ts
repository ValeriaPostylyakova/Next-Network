import { Status } from '../../../@types/fetchStatus'
import { TProfile } from './../../../@types/profile'
export type InitialState = {
	friendsSuggestion: TProfile[]
	statusFriendsSuggestion: Status
}
