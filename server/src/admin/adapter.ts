import AdminJS from 'adminjs'
import { Database, Resource } from '@adminjs/prisma'

AdminJS.registerAdapter({ Database, Resource })

export { Database, Resource }
