import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class SearchService {
	async search(query: string) {
		const users = await prisma.user.findMany({
			where: {
				OR: [
					{
						firstname: {
							contains: query,
							mode: 'insensitive',
						},
					},
					{
						lastname: {
							contains: query,
							mode: 'insensitive',
						},
					},
					{
						identifier: {
							contains: query,
							mode: 'insensitive',
						},
					},
				],
			},
			take: 4,
		})

		return users
	}
}
