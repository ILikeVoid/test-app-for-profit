import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/appRoutes.js'

export default function Header() {
	return (
		<div className={s.header}>
			<div className={s.header_items}>
				<div className={s.logo}>Test APP</div>
				<nav>
					{APP_ROUTES.map(route => (
						<NavLink
							key={route.id}
							to={route.href}
							className={({ isActive }) => isActive ? s.active_link : ''}>
							{route.title}
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	)
}