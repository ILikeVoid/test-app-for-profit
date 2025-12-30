import { create } from 'zustand'
import { apiInstance } from '../api/axios.js'

export const useAppealsStore = create((set) => ({
	data: [],
	isLoading: false,
	error: null,

	fetchAppeals: async () => {
		set({ 
			isLoading: true, 
			error: null 
		})
		setTimeout(async () => {
			try {
				const { data } = await apiInstance.get('/data.json')
				set({ 
					data, 
					isLoading: false 
				})
			} catch (err) {
				set({
					error: err?.response?.data?.message || 'Ошибка загрузки обращений',
					isLoading: false
				})
			}
		}, 1000)
	}
}))
