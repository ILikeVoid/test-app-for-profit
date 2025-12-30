import s from "./AppealsTablePage.module.scss"
import { AppealsTable } from '../../components/AppealsTable/AppealsTable.jsx'
import { useAppealsStore } from '../../store/appealsStore.js'
import { Modal } from 'antd'
import { useMemo, useState } from 'react'
import { AppealDetails } from '../../components/AppealDetails/AppealDetails.jsx'
import AppealsStatusFilter from '../../components/AppealsStatusFilter/AppealsStatusFilter.jsx'
import Search from '../../components/Search/Search.jsx'

export function AppealsTablePage() {
	const appeals = useAppealsStore(state => state.data)
	const isLoading = useAppealsStore(state => state.isLoading)

	const [open, setOpen] = useState(false)
	const [selectedAppeal, setSelectedAppeal] = useState(null)
	const [selectedStatuses, setSelectedStatuses] = useState([])
	const [search, setSearch] = useState('')

	const filteredAppeals = useMemo(() => {
		return appeals.filter(item => {
			const byStatus = !selectedStatuses.length || selectedStatuses.includes(item.status)
			const text = search.toLowerCase()
			const bySearch = !text || item.category.toLowerCase().includes(text) || item.address.toLowerCase().includes(text)
			return byStatus && bySearch
		})
	}, [appeals, selectedStatuses, search])

	function handleClose() {
		setSelectedAppeal(null)
		setOpen(false)
	}

	return (
		<>
			<div className={s.filter}>
				<AppealsStatusFilter
					selectedStatuses={selectedStatuses}
					onChange={setSelectedStatuses}
				/>
				<Search value={search} onChange={setSearch} />
			</div>
			<AppealsTable
				appeals={filteredAppeals}
				isLoading={isLoading}
				setSelectedAppeal={setSelectedAppeal}
				setOpen={setOpen}
			/>
			<Modal
				open={open}
				title={`Обращение №:${selectedAppeal?.id}`}
				onCancel={handleClose}
				footer={null}
				afterOpenChange={(visible) => {
					if (visible) {
						setTimeout(() => {
							window.dispatchEvent(new Event('resize'))
						}, 0)
					}
				}}
			>
				<AppealDetails appeal={selectedAppeal} />
			</Modal>
		</>
	)
}