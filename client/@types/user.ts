import { Post, Story } from './post'
import { TProfile } from './profile'

export type TUser = TProfile & {
	posts: Post[]
	stories: Story[]
}
