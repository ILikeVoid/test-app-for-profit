import { Tag } from 'antd'
import { APPEAL_STATUS_COLORS } from './appealsStatuses.js'

export const APPEALS_TABLE_COLUMNS = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Категория',
		dataIndex: 'category',
		key: 'category'
	},
	{
		title: 'Адрес',
		dataIndex: 'address',
		key: 'address'
	},
	{
		title: 'Статус',
		dataIndex: 'status',
		key: 'status',
		render: (status) => (
			<Tag color={APPEAL_STATUS_COLORS[status]}>
				{status}
			</Tag>
		)
	},
	{
		title: 'Дата регистрации',
		dataIndex: 'created_at',
		key: 'created_at'
	}
]