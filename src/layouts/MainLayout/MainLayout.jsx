import s from './MainLayout.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import { useEffect } from 'react'
import { useAppealsStore } from '../../store/appealsStore.js'
import { APP_ROUTES } from '../../constants/appRoutes.js'

export function MainLayout() {
	const fetchAppeals = useAppealsStore(state => state.fetchAppeals)
	const location = useLocation()

	useEffect(() => {
		fetchAppeals().then(() => console.log(''))
	}, [fetchAppeals])

	const currentRoute = APP_ROUTES.find(route => route.href === location.pathname)

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