import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.js'

export default function Header() {
	return (
		<div className={s.header}>
			<div className={s.header_items}>
				<div className={s.logo}>Test APP</div>
				<nav>
					{ROUTES.map(route => (
						<NavLink
							key={route.id}
							to={route.slug}
							className={({ isActive }) =>
								isActive ? 'active_link' : ''
							}
						>
							{route.title}
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	)
}