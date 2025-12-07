import './adapter.js'
import buildResources from './resources/index.js'
import { ResourceDeps } from './types.js'

export default function createAdminConfig(deps: ResourceDeps) {
	return {
		resources: buildResources(deps),
		rootPath: '/admin',
	}
}
