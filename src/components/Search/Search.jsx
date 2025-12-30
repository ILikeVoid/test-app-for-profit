import s from './Search.module.scss'

export default function Search({ value, onChange }) {
	return (
		<div className={s.search}>
			<input
				type="text"
				placeholder="Поиск по категории или адресу"
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	)
}

