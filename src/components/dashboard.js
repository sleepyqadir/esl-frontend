import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "./common/breadcrumb";
import {
	Navigation,
	Box,
	MessageSquare,
	Users,
	Briefcase,
	CreditCard,
	ShoppingCart,
	Calendar,
} from "react-feather";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";

import { Bar, Line } from "react-chartjs-2";
import {
	lineOptions,
	buyOption,
} from "../constants/chartData";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarController,
	BarElement,
	ArcElement,
	Filler,
	RadialLinearScale
} from 'chart.js';


// image impoer
import user2 from "../assets/images/dashboard/user2.jpg";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Media,
	Row,
	Table,
} from "reactstrap";
import { getContainerData, getLatestContainers, getLineDate, getMonthlyProfit, getTopClients } from "../utils";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarController,
	BarElement,
	ArcElement,
	Filler,
	RadialLinearScale
);

const Dashboard = () => {


	const [containers, setContainers] = useState([])
	const [containersMonthly, setContainersMonthly] = useState(null)
	const [topClients, setTopCLients] = useState([])


	const getTotalYearProfit = (year) => {
		let sum = 0
		const object = getMonthlyProfit()[year]
		for (const key in object) {
			const value = object[key];
			sum += value

		}
		return sum
	}


	useEffect(() => {
		(async () => {
			const data = await getLatestContainers()
			const data2 = await getTopClients()
			const slicedArray = data.reverse().slice(0, 5);
			const monthly = await getContainerData()
			setContainersMonthly(monthly)
			setTopCLients(data2.slice(0, 5))
			setContainers(slicedArray)
		})()
	}, [])


	const doughnutOptions = {
		title: "",
		pieHole: 0.35,
		pieSliceBorderColor: "none",
		colors: ["#ff8084", "#13c9ca", "#a5a5a5"],
		legend: {
			position: "none",
		},
		pieSliceText: "none",
		tooltip: {
			trigger: "none",
		},
		animation: {
			startup: true,
			easing: "linear",
			duration: 1500,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		enableInteractivity: false,
	};
	const pieOptions = {
		title: "",
		pieHole: 1,
		slices: [
			{
				color: "#ff8084",
			},
			{
				color: "#13c9ca",
			},
			{
				color: "#f0b54d",
			},
		],
		tooltip: {
			showColorCode: false,
		},
		chartArea: { left: 0, top: 10, width: "360px", height: "100%" },
		legend: "none",
	};
	const LineOptions = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#ff8084"],
		legend: "none",
	};
	const LineOptions1 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#13c9ca"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	const LineOptions2 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#f5ce8a"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	const LineOptions3 = {
		hAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		vAxis: {
			textPosition: "none",
			baselineColor: "transparent",
			gridlineColor: "transparent",
		},
		colors: ["#a5a5a5"],
		chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
		legend: "none",
	};
	return (
		<Fragment>
			<Breadcrumb title="Dashboard" parent="Dashboard" />
			<Container fluid={true}>
				<Row>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden widget-cards">
							<CardBody className="bg-warning">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Box className="font-secondary" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Earnings</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={getMonthlyProfit()[2022].december} />
											<small> Last Month</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden  widget-cards">
							<CardBody className="bg-secondary ">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Box className="font-secondary" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Sales</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={getTotalYearProfit(2022)} />
											<small> Last Year</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className="o-hidden widget-cards">
							<CardBody className="bg-primary">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Box className="font-secondary" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Sales</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={getTotalYearProfit(2021) + getTotalYearProfit(2022)} />
											<small> Two Years</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" o-hidden widget-cards">
							<CardBody className="bg-danger ">
								<Media className="static-top-widget row">
									<div className="icons-widgets col-4">
										<div className="align-self-center text-center">
											<Users className="font-danger" />
										</div>
									</div>
									<Media body className="col-8">
										<span className="m-0">Sales</span>
										<h3 className="mb-0">
											$ <CountUp className="counter" end={getTotalYearProfit(2021) + getTotalYearProfit(2022) + getTotalYearProfit(2020)} />
											<small> Three Years</small>
										</h3>
									</Media>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card>
							<CardHeader>
								<h5>Profit Analysis 2021-2022</h5>
							</CardHeader>
							<CardBody>
								<div className="market-chart">
									<Bar
										data={getLineDate()}
										options={lineOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card>
							<CardHeader>
								<h5>Latest Containers</h5>
							</CardHeader>
							<CardBody>
								<div className="user-status table-responsive latest-order-table">
									<Table borderless>
										<thead>
											<tr>
												<th scope="col">Container ID</th>
												<th scope="col">CLient ID</th>
												<th scope="col">Active on</th>
												<th scope="col">Status</th>
											</tr>
										</thead>
										<tbody>

											{containers.map(container => {
												return <tr>
													<td>{container.Container}</td>
													<td className="digits">{container.Client}</td>
													<td className="font-danger">{new Date(container.Date).getMonth()} {new Date(container.Date).getFullYear()}</td>
													<td className="digits">Active</td>
												</tr>
											})}
										</tbody>
									</Table>
									<a href="/containers/list_containers" className="btn btn-primary">
										View All Containers
									</a>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" order-graph sales-carousel">
							<CardHeader>
								<h6>Total Sales</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline-3"
											>
												<Chart
													height={"60px"}
													chartType="LineChart"
													loader={<div>Loading Chart</div>}
													data={[
														["x", "time"],
														[7, getMonthlyProfit()[2022].july],
														[8, getMonthlyProfit()[2022].augues],
														[9, getMonthlyProfit()[2022].september],
														[10, getMonthlyProfit()[2022].october],
														[11, getMonthlyProfit()[2022].november],
														[12, getMonthlyProfit()[2022].december],
													]}
													options={LineOptions}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												8%{" "}
												<span>
													<i className="fa fa-angle-up font-primary"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<span>Sales Last Month</span>
										<h2 className="mb-0">{getMonthlyProfit()[2022].december} $</h2>
										<p>
											8%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p>
										<h5 className="f-w-600 f-16">Gross sales of Last 6 Months</h5>
									</Media>
									<div className="bg-primary b-r-8">
										<div className="small-box">
											<Briefcase />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className=" order-graph sales-carousel">
							<CardHeader>
								<h6>Total purchase</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline"
											>
												<Chart
													height={"60px"}
													chartType="LineChart"
													loader={<div>Loading Chart</div>}
													data={[
														["x", "time"],
														[0, 85],
														[1, 83],
														[2, 90],
														[3, 70],
														[4, 85],
														[5, 60],
														[6, 65],
														[7, 63],
														[8, 68],
														[9, 68],
														[10, 65],
														[11, 40],
														[12, 60],
														[13, 75],
														[14, 70],
														[15, 90],
													]}
													options={LineOptions1}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												20%{" "}
												<span>
													<i className="fa fa-angle-up font-secondary"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<span>Monthly Purchase</span>
										<h2 className="mb-0">2154</h2>
										<p>
											0.13%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p>
										<h5 className="f-w-600 f-16">Avg Gross purchase</h5>

									</Media>
									<div className="bg-secondary b-r-8">
										<div className="small-box">
											<CreditCard />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className="order-graph sales-carousel">
							<CardHeader>
								<h6>Total cash transaction</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline-2"
											>
												<Chart
													height={"60px"}
													chartType="LineChart"
													loader={<div>Loading Chart</div>}
													data={[
														["x", "time"],
														[0, 85],
														[1, 83],
														[2, 90],
														[3, 70],
														[4, 85],
														[5, 60],
														[6, 65],
														[7, 63],
														[8, 68],
														[9, 68],
														[10, 65],
														[11, 40],
														[12, 60],
														[13, 75],
														[14, 70],
														[15, 90],
													]}
													options={LineOptions2}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												28%{" "}
												<span>
													<i className="fa fa-angle-up font-warning"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<span>Cash on hand</span>
										<h2 className="mb-0">4672</h2>
										<p>
											0.8%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p>
										<h5 className="f-w-600 f-16">Details about cash</h5>

									</Media>
									<div className="bg-warning b-r-8">
										<div className="small-box">
											<ShoppingCart />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col xl="3 xl-50" md="6">
						<Card className="order-graph sales-carousel">
							<CardHeader>
								<h6>Daily Deposits</h6>
								<Row>
									<Col className="col-6">
										<div className="small-chartjs">
											<div
												className="flot-chart-placeholder"
												id="simple-line-chart-sparkline-1"
											>
												<Chart
													height={"60px"}
													chartType="LineChart"
													loader={<div>Loading Chart</div>}
													data={[
														["x", "time"],
														[0, 85],
														[1, 83],
														[2, 90],
														[3, 70],
														[4, 85],
														[5, 60],
														[6, 65],
														[7, 63],
														[8, 68],
														[9, 68],
														[10, 65],
														[11, 40],
														[12, 60],
														[13, 75],
														[14, 70],
														[15, 90],
													]}
													options={LineOptions3}
													legend_toggle
												/>
											</div>
										</div>
									</Col>
									<Col className="col-6">
										<div className="value-graph">
											<h3>
												75%{" "}
												<span>
													<i className="fa fa-angle-up font-danger"></i>
												</span>
											</h3>
										</div>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Media>
									<Media body>
										<span>Security Deposits</span>
										<h2 className="mb-0">5782</h2>
										<p>
											0.25%{" "}
											<span>
												<i className="fa fa-angle-up"></i>
											</span>
										</p>
										<h5 className="f-w-600 f-16">Gross sales of June</h5>

									</Media>
									<div className="bg-danger b-r-8">
										<div className="small-box">
											<Calendar />
										</div>
									</div>
								</Media>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Container Buy</h5>
							</CardHeader>
							<CardBody className="sell-graph">
								{containersMonthly && <Line
									data={containersMonthly}
									options={buyOption}
									width={700}
									height={350}
								/>}
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h5>Products Cart</h5>
							</CardHeader>
							<CardBody>
								<div className="user-status table-responsive products-table">
									<table className="table table-bordernone mb-0">
										<thead>
											<tr>
												<th scope="col">Details</th>
												<th scope="col">Quantity</th>
												<th scope="col">Status</th>
												<th scope="col">Price</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Simply dummy text of the printing</td>
												<td className="digits">1</td>
												<td className="font-primary">Pending</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>Long established</td>
												<td className="digits">5</td>
												<td className="font-secondary">Cancle</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>sometimes by accident</td>
												<td className="digits">10</td>
												<td className="font-secondary">Cancle</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>classical Latin literature</td>
												<td className="digits">9</td>
												<td className="font-primary">Return</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>keep the site on the Internet</td>
												<td className="digits">8</td>
												<td className="font-primary">Pending</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>Molestiae consequatur</td>
												<td className="digits">3</td>
												<td className="font-secondary">Cancle</td>
												<td className="digits">$6523</td>
											</tr>
											<tr>
												<td>Pain can procure</td>
												<td className="digits">8</td>
												<td className="font-primary">Return</td>
												<td className="digits">$6523</td>
											</tr>
										</tbody>
									</table>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6 xl-100">
						<Card className="height-equal">
							<CardHeader>
								<h5>Clients Status</h5>
							</CardHeader>
							<CardBody>
								<div className="user-status table-responsive products-table">
									<Table className=" table-bordernone mb-0">
										<thead>
											<tr>
												<th scope="col">Name</th>
												<th scope="col">Client Id</th>
												<th scope="col">Containers</th>
												<th scope="col">Email</th>
											</tr>
										</thead>
										<tbody>
											{topClients.map(client => {
												return <tr>
													<td className="bd-t-none u-s-tb">
														<div className="align-middle image-sm-size">
															<div className="d-inline-block">
																<h6>
																	{client.first_name} {client.last_name}
																</h6>
															</div>
														</div>
													</td>
													<td>{client.id}</td>
													<td>
														{client.containers}
													</td>
													<td className="digits">{client.email}</td>
												</tr>
											})}
										</tbody>
									</Table>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

// javascript:void(0)

export default Dashboard;
