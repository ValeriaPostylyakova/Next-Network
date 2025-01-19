import axios from 'axios'

const API_URL = 'http://localhost:4200/api'

export const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})
