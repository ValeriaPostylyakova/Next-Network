import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export class ProfileService {
	async profile(id: string) {
		const profile = await prisma.user.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!profile) {
			throw new Error('Такого профиля не существует')
		}
		return profile
	}

	async update(
		id: string,
		firstname: string,
		lastname: string,
		jobTitle: string,
		identifier: string
	) {
		const profile = await prisma.user.findFirst({
			where: {
				id: Number(id),
			},
		})

		if (!profile) {
			throw new Error('Такого профиля не существует')
		}

		if (
			firstname === profile.firstname &&
			lastname === profile.lastname &&
			jobTitle === profile.jobTitle &&
			identifier === profile.identifier
		) {
			return null
		}

		const newProfile = await prisma.user.update({
			where: {
				id: profile.id,
			},
			data: {
				firstname,
				lastname,
				jobTitle,
				identifier,
			},
		})

		return newProfile
	}
}
