import s from './MainLayout.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import { useEffect } from 'react'
import { useAppealsStore } from '../../store/appeals-store.js'
import { ROUTES } from '../../constants/routes.js'

export function MainLayout() {
	const fetchAppeals = useAppealsStore(state => state.fetchAppeals)
	const location = useLocation()

	useEffect(() => {
		fetchAppeals()
	}, [fetchAppeals])

	const currentRoute = ROUTES.find(
		route => route.slug === location.pathname
	)

	return (
		<div className={s.layout}>
			<Header />
			<main>
				<div className={s.page_name}>{currentRoute.title}</div>
				<Outlet />
			</main>
		</div>
	)
}