import s from './AppealsTablePage.module.css'
import { AppealsTable } from '../../components/AppealsTable/AppealsTable.jsx'
import { useAppealsStore } from '../../store/appeals-store.js'

export function AppealsTablePage() {
	const { appeals, isLoading } = useAppealsStore()

	console.log('11')

	return (
		<div className={s.appealsTable}>
			<AppealsTable appeals={appeals} isLoading={isLoading} />
		</div>
	)
}