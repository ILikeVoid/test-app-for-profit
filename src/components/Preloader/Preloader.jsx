import s from './Preloader.module.scss'
import { Spin } from 'antd'

export default function Preloader() {
	return (
		<div className={s.preloader}>
			<Spin size="large" />
			<div>Загрузка...</div>
		</div>
	)
}