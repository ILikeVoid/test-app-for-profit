import s from './AppealsStatusFilter.module.scss'
import { APPEAL_STATUS_COLORS, APPEAL_STATUSES } from '../../constants/appealsStatuses.js'
import { FilterFilled } from '@ant-design/icons'

export default function AppealsStatusFilter({ selectedStatuses = [], onChange }) {
	function toggle(status) {
		return selectedStatuses.includes(status)
			? selectedStatuses.filter(s => s !== status)
			: [...selectedStatuses, status]
	}

	return (
		<div className={s.filter}>
			<div className={s.title}><FilterFilled /><span>Статус</span></div>
			<div className={s.list}>
				{APPEAL_STATUSES.map(status => (
					<label key={status} className={s.checkbox}>
						<input
							type="checkbox"
							checked={selectedStatuses.includes(status)}
							onChange={() => onChange(toggle(status))}
						/>
						<span
							className={s.custom}
							style={{ borderColor: APPEAL_STATUS_COLORS[status] }}
						/>
						<span className={s.label}>{status}</span>
					</label>
				))}
			</div>
		</div>
	)
}