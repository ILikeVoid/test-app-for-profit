import s from './AppealsTable.module.scss'
import { Table } from 'antd'
import { APPEALS_TABLE_COLUMNS } from '../../constants/appealsTableColums.jsx'

export function AppealsTable({ appeals, isLoading, setSelectedAppeal, setOpen }) {
	return (
		<div className={s.tableWrapper}>
			<Table rowKey="id"
						 columns={APPEALS_TABLE_COLUMNS}
						 dataSource={appeals}
						 loading={isLoading}
						 tableLayout="fixed"
						 pagination={{ pageSize: 10 }}
						 rowClassName={s.row}
						 onRow={(appeal) => ({
							 onClick: () => {
								 setSelectedAppeal(appeal)
								 setOpen(true)
							 }
						 })}
			/>
		</div>
	)
}