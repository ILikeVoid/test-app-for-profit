import { Table } from 'antd'
import { APPEALS_TABLE_COLUMNS } from '../../constants/appealsTableColums.jsx'

export function AppealsTable({ appeals, isLoading }) {
	return (
		<Table rowKey="id"
					 columns={APPEALS_TABLE_COLUMNS}
					 dataSource={appeals}
					 loading={isLoading}
					 tableLayout="fixed"
					 pagination={{ pageSize: 10 }}
		/>
	)
}