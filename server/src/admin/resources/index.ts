import { ResourceDeps } from '../types.js'

import commentResource from './comment.resource.js'
import postResource from './post.resource.js'
import sessionResource from './session.resource.js'
import storyResource from './story.resource.js'
import storyItemResource from './storyItem.resource.js'
import tokenResource from './token.resource.js'
import userResource from './user.resource.js'

export default function buildResources(deps: ResourceDeps) {
	return [
		userResource(deps),
		sessionResource(deps),
		tokenResource(deps),
		postResource(deps),
		commentResource(deps),
		storyItemResource(deps),
		storyResource(deps),
	]
}
