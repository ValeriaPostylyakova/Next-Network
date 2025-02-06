import { api } from '@/http/axios'
import { TProfile } from '../../@types/profile'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: TProfile
}

export class UserService {
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

	static async updateProfileInfo(
		id: number,
		firstname: string,
		lastname: string,
		jobTitle: string,
		identifier: string
	) {
		return api.patch<TProfile>(`/updateProfile`, {
			id,
			firstname,
			lastname,
			jobTitle,
			identifier,
		})
	}

	static async updateProfileInfoEMail(id: number, email: string) {
		return api.patch<TProfile>(`/updateProfileEmail`, {
			id,
			email,
		})
	}
	static async updateProfileInfoPhone(id: number, phone: string) {
		return api.patch<TProfile>(`/updateProfilePhone`, {
			id,
			phone,
		})
	}

	static async updateProfileImageUrl(id: number, image: File) {
		return api.patch<TProfile>(`/updateProfileImageUrl`, {
			id,
			image,
		})
	}
}
