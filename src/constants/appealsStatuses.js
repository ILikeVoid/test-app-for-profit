const AppealsStatuses = {
	IN_PROGRESS: 'В работе',
	RESOLVED: 'Решено',
	REJECTED: 'Отклонено'
}

export const APPEAL_STATUS_COLORS = {
	[AppealsStatuses.IN_PROGRESS]: 'blue',
	[AppealsStatuses.RESOLVED]: 'green',
	[AppealsStatuses.REJECTED]: 'red'
}