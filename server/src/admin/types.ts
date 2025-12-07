import { PrismaClient } from '@prisma/client'

export interface ResourceDeps {
	getModelByName: (name: string) => any
	prisma: PrismaClient
}
