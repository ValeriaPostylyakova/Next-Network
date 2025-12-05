import { Status } from '../../../@types/fetchStatus'
import { TStory } from '../../../@types/stories'

export type InitialState = {
	stories: TStory[]
	status: Status
}
