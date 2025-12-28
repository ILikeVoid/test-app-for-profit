import s from './AppealsTablePage.module.css'
import { AppealsTable } from '../../components/AppealsTable/AppealsTable.jsx'
import { useAppealsStore } from '../../store/appealsStore.js'
import { Modal } from 'antd'
import { useState } from 'react'

export function AppealsTablePage() {
	const appeals = useAppealsStore(state => state.data)
	const isLoading = useAppealsStore(state => state.isLoading)

	const [open, setOpen] = useState(false)
	const [selectedAppeal, setSelectedAppeal] = useState(null)

	function handleClose() {
		setSelectedAppeal(null)
		setOpen(false)
	}

	return (
		<>
			<AppealsTable
				appeals={appeals}
				isLoading={isLoading}
				setSelectedAppeal={setSelectedAppeal}
				setOpen={setOpen}
			/>
			<Modal
				open={open}
				title={`Обращение №:${selectedAppeal?.id}`}
				onCancel={handleClose}
				footer={null}
			>
				<div className={s.category}>{selectedAppeal?.category}</div>
				<div className={s.items}>
					<div className={s.item}></div>
					<div className={s.item}></div>
					<div className={s.item}></div>
					<div className={s.item}></div>
				</div>
			</Modal>
		</>
	)
}