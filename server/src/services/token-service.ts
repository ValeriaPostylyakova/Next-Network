import { PrismaClient } from '@prisma/client'
import jwt, { JwtPayload } from 'jsonwebtoken'

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

	validateAccessToken(token: string) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN || '')
			return userData
		} catch (e) {
			return null
		}
	}

	validateRefreshToken(token: string) {
		try {
			const userData = jwt.verify(
				token,
				process.env.JWT_REFRESH_TOKEN || ''
			) as JwtPayload
			return userData
		} catch (e) {
			return null
		}
	}

	async saveToken(userId: number, refreshToken: string) {
		const tokenData = await prisma.token.findUnique({
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
		} else {
			const token = await prisma.token.create({
				data: {
					userId: userId,
					refreshToken: refreshToken,
				},
			})

			return token
		}
	}

	async deleteToken(userId?: number) {
		if (userId) {
			const tokenData = await prisma.token.delete({
				where: {
					userId: userId,
				},
			})

			return tokenData
		}
	}

	async findToken(token: string) {
		const refToken = await prisma.token.findFirst({
			where: {
				refreshToken: token,
			},
		})

		return refToken
	}
}
