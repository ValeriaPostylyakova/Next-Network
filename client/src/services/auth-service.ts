import { api } from '@/http/axios'
import { TProfile } from '../../@types/profile'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: TProfile
}

export class AuthService {
	static async login(email: string, password: string) {
		return api.post<AuthResponse>('/login', { email, password })
	}

	static async registration(
		email: string,
		password: string,
		firstname: string,
		lastname: string
	) {
		return api.post<AuthResponse>('/registration', {
			email,
			password,
			firstname,
			lastname,
		})
	}

	static async logout() {
		return api.post('/logout')
	}
}
