import { PrismaClient } from '@prisma/client'
import cron from 'node-cron'

const prisma = new PrismaClient()

export const startCronJob = () => {
	cron.schedule(
		'*/1 * * * *',
		async () => {
			try {
				const expiredStoryItems = await prisma.storyItem.findMany({
					where: {
						expiresAt: {
							lt: new Date(),
						},
					},
				})

				for (const storyItem of expiredStoryItems) {
					const storyId = storyItem.storyId

					if (storyId !== null) {
						await prisma.storyItem.delete({
							where: {
								id: storyItem.id,
							},
						})
						console.log(`StoryItem с ID ${storyItem.id} удалена.`)

						const remainingStoryItems = await prisma.storyItem.findMany({
							where: {
								storyId: storyId,
							},
						})

						if (remainingStoryItems.length === 0) {
							await prisma.story.delete({
								where: {
									id: storyId,
								},
							})
							console.log(`Story с ID ${storyId} удалена`)
						}
					}
				}
			} catch (error) {
				console.error('Ошибка при удалении StoryItem:', error)
			}
		},
		{
			scheduled: true,
			timezone: 'Europe/Moscow',
		}
	)
}
