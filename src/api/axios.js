import axios from 'axios'

export const BASE_URL = import.meta.env.VITE_BASE_URL

export const createInstance = (baseURL) => {
	const instance = axios.create({
		baseURL: baseURL,
		timeout: 5000,
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return instance
}

export const apiInstance = createInstance(BASE_URL)