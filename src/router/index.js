import React from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
	Outlet,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem("token");
	if (token) {
		console.log("OKE");
		return children;
	} else {
		return <Navigate to="/login" />;
	}
};

const PrivateRouteDua = () => {
	const token = localStorage.getItem("token");
	if (token) {
		console.log("OKE");
		return <Outlet />;
	} else {
		return <Navigate to="/login" />;
	}
};

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" >
					<Route index element={<Home />} />
				</Route>
				<Route path="/about" >
					<Route index element={<Home />} />
				</Route>
				<Route path="/login">
					<Route index element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
