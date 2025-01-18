import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export class TokenService {
	generateTokens(payload: any) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN || '', {
			expiresIn: '30m',
		})

		const refreshToken = jwt.sign(
			payload,
			process.env.JWT_REFRESH_TOKEN || '',
			{
				expiresIn: '30d',
			}
		)

		return {
			accessToken,
			refreshToken,
		}
	}

	async saveToken(userId: number, refreshToken: string) {
		const tokenData = await prisma.token.findFirst({
			where: {
				userId: userId,
			},
		})

		if (tokenData) {
			return await prisma.token.update({
				where: {
					userId: tokenData.userId,
				},
				data: {
					refreshToken: refreshToken,
				},
			})
		}

		const token = await prisma.token.create({
			data: {
				userId: userId,
				refreshToken: refreshToken,
			},
		})

		return token
	}
}
