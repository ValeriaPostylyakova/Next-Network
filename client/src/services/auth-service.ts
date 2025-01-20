import { api } from '@/http/axios'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: TUser
}

export type TUser = {
	id: number
	email: string
	isActivated: boolean
}

export class AuthService {
	static async login(email: string, password: string) {
		return api.post<AuthResponse>('/login', { email, password })
	}

	static async registration(email: string, password: string) {
		return api.post<AuthResponse>('/registration', { email, password })
	}

	static async logout() {
		return api.post('/logout')
	}
}
