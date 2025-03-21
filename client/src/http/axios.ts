import axios from 'axios'

export const API_URL = `${process.env.API_URL}/api`

export const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

api.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._retry) {
			originalRequest._retry = true
			try {
				const response = await axios.get(`${API_URL}/refresh`, {
					withCredentials: true,
				})
				localStorage.setItem('token', response.data.accessToken)
				return api.request(originalRequest)
			} catch (e) {
				console.log('Пользователь не авторизован')
			}
		}
		throw error
	}
)
