import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../components/app'
import Datatable from '../components/common/datatable'
import Createcoupons from '../components/coupons/create-coupons'
import ListCoupons from '../components/coupons/list-coupons'
import Dashboard from '../components/dashboard'
import Invoice from '../components/invoice'
import Rates from '../components/localization/rates'
import Taxes from '../components/localization/taxes'
import Media from '../components/media/media'
import Reports from '../components/reports/report'
import Transactionsales from '../components/sales/transactions-sales'
import Profile from '../components/settings/profile'
import Createuser from '../components/users/create-user'
import Listuser from '../components/users/list-user'
import Createvendors from '../components/vendors/create.vendors'
import Listvendors from '../components/vendors/list-vendors'

const LayoutRoutes = () => {
	return (
		<Fragment>
			<Routes>
				<Route element={<App />}>
					<Route
						path={`${process.env.PUBLIC_URL}/dashboard`}
						element={<Dashboard />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/sales/transactions`}
						element={<Transactionsales />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
						element={<ListCoupons />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
						element={<Createcoupons />}
					/>


					<Route path={`${process.env.PUBLIC_URL}/media`} element={<Media />} />


					<Route
						path={`${process.env.PUBLIC_URL}/clients/list-clients`}
						element={<Listuser />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/clients/create-clients`}
						element={<Createuser />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/containers/list_containers`}
						element={<Listvendors />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/containers/create-containers`}
						element={<Createvendors />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
						element={<Rates />}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/localization/taxes`}
						element={<Taxes />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/reports/report`}
						element={<Reports />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/settings/profile`}
						element={<Profile />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/invoice`}
						element={<Invoice />}
					/>

					<Route
						path={`${process.env.PUBLIC_URL}/data-table`}
						element={<Datatable />}
					/>
				</Route>
			</Routes>
		</Fragment>
	)
}

export default LayoutRoutes