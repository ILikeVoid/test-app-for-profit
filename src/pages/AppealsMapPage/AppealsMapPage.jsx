import s from './AppealsMapPage.module.css'
import Map from '../../components/Map/Map.jsx'
import { useAppealsStore } from '../../store/appealsStore.js'
import Preloader from '../../components/Preloader/Preloader.jsx'

export function AppealsMapPage() {
	const appeals = useAppealsStore(state => state.data)
	const isLoading = useAppealsStore(state => state.isLoading)

	if (isLoading || !appeals.length) return <Preloader />

	const center = [appeals[0].latitude, appeals[0].longitude]

	return (
		<>
			<Map center={center} appeals={appeals} />
		</>
	)
}