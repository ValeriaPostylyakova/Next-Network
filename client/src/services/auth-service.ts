import { api } from '@/http/axios'

interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: TUser
}

type TUser = {
	id: number
	email: string
	isActivated: boolean
}

class AuthService {
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
