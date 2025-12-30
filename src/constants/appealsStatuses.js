export const APPEAL_STATUSES = ['В работе', 'Решено', 'Отклонено']

const AppealsStatusesKeys = {
	IN_PROGRESS: 'В работе',
	RESOLVED: 'Решено',
	REJECTED: 'Отклонено'
}

export const APPEAL_STATUS_COLORS = {
	[AppealsStatusesKeys.IN_PROGRESS]: 'blue',
	[AppealsStatusesKeys.RESOLVED]: 'green',
	[AppealsStatusesKeys.REJECTED]: 'red'
}