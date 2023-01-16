import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Routers from './routes'
import PerfectScrollbar from "react-perfect-scrollbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
	return (
		<React.StrictMode>
			<BrowserRouter basename={"/"}>
				<PerfectScrollbar>
					<Routers />
					<ToastContainer />
				</PerfectScrollbar>
			</BrowserRouter>
		</React.StrictMode>
	);
};

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<React.StrictMode><Root /></React.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
