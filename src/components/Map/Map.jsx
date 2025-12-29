import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import s from './Map.module.scss'
import { APPEAL_STATUS_COLORS } from '../../constants/appealsStatuses.js'
import { coloredMarker } from '../../utils/mapMarkerIcons.js'
import { Tag } from 'antd'

export default function Map({ center, zoom = 16, appeal, appeals }) {
	return (
		<div className={`${s.mapWrapper} ${appeal ? s.shortWrapper : s.fullMapWrapper}`}>
			<MapContainer
				center={center}
				zoom={zoom}
				className={s.map}
			>
				<TileLayer
					attribution="&copy; OpenStreetMap contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{appeal ? (
					<Marker position={[appeal.latitude, appeal.longitude]}
									icon={coloredMarker(APPEAL_STATUS_COLORS[appeal.status], appeal.category)}
					>
						<Popup>{appeal.address}</Popup>
					</Marker>
				) : (
					appeals?.map(item => (
						<Marker key={item.id} position={[item.latitude, item.longitude]}
										icon={coloredMarker(APPEAL_STATUS_COLORS[item.status], item.category)}
						>
							<Popup>
								<div className={s.popup_items}>
									<div className={s.popup_head}>
										<div className={s.popup_category}>{item.category}</div>
										<Tag color={APPEAL_STATUS_COLORS[item.status]}>
											{item.status}
										</Tag>
									</div>
									<div className={s.popup_address}>Адрес: {item.address}</div>
								</div>
							</Popup>
						</Marker>
					))
				)}
			</MapContainer>
		</div>
	)
}