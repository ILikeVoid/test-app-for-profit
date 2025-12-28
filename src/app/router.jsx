import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/MainLayout.jsx'

import { AppealsTablePage } from '../pages/AppealsTablePage/AppealsTablePage.jsx'
import { AppealsMapPage } from '../pages/AppealsMapPage/AppealsMapPage.jsx'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: '/', element: <AppealsTablePage /> },
			{ path: '/map', element: <AppealsMapPage /> }
		]
	}
])