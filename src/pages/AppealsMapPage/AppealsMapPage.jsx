import Map from '../../components/Map/Map.jsx'
import { useAppealsStore } from '../../store/appealsStore.js'
import Preloader from '../../components/Preloader/Preloader.jsx'
import AppealsStatusFilter from '../../components/AppealsStatusFilter/AppealsStatusFilter.jsx'
import { useMemo, useState } from 'react'

export function AppealsMapPage() {
	const appeals = useAppealsStore(state => state.data)
	const isLoading = useAppealsStore(state => state.isLoading)

	const [selectedStatuses, setSelectedStatuses] = useState([])

	const filteredAppeals = useMemo(() => {
		if (!selectedStatuses.length) return appeals
		return appeals.filter(item =>
			selectedStatuses.includes(item.status)
		)
	}, [appeals, selectedStatuses])

	if (isLoading || !appeals.length) return <Preloader />

	const center = [appeals[0].latitude, appeals[0].longitude]

	return (
		<>
			<AppealsStatusFilter
				selectedStatuses={selectedStatuses}
				onChange={setSelectedStatuses}
			/>
			<Map center={center} appeals={filteredAppeals} />
		</>
	)
}