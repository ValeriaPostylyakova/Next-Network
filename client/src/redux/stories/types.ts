import { Status } from '../../../@types/fetchStatus'
import { TStory } from '../../../@types/post'

export type InitialState = {
	stories: TStory[]
	status: Status
}
