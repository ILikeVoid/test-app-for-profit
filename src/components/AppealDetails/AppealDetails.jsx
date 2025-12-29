import s from './AppealDetails.module.scss'
import Map from '../Map/Map.jsx'
import { Tag } from 'antd'
import { APPEAL_STATUS_COLORS } from '../../constants/appealsStatuses.js'

export function AppealDetails({ appeal }) {
	if (!appeal) return null

	return (
		<>
			<Map
				key={appeal.id}
				center={[appeal.latitude, appeal.longitude]}
				appeal={appeal}
			/>
			<div className={s.appeal_head}>
				<div className={s.category}>{appeal.category}</div>
				<Tag color={APPEAL_STATUS_COLORS[appeal.status]} className={s.tag}>
					{appeal.status}
				</Tag>
			</div>
			<div className={s.items}>
				<div className={s.item}>
					<span>Адрес:</span>
					<span>{appeal.address}</span>
				</div>
				<div className={s.item}>
					<span>Дата создания:</span>
					<span>{new Date(appeal.created_at).toLocaleDateString()}</span>
				</div>
				<div className={s.item}>
					<span>Широта:</span>
					<span>{appeal.latitude}</span>
				</div>
				<div className={s.item}>
					<span>Долгота:</span>
					<span>{appeal.longitude}</span>
				</div>
			</div>
			<div className={s.description}>
				<span>Описание:</span>
				{appeal.description}
			</div>
		</>
	)
}
