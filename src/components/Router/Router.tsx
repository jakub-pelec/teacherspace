import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Dashboard from "../Dashboard/Dashboard";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				<Route exact path="/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
