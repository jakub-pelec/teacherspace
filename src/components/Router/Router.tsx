import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Dashboard from "../Dashboard/Dashboard";
import SignupSecondStage from "../SignupSecondStage/SignupSecondStage";
import LandingPage from "../LandingPage/LandingPage";
import { subscribeToAuthUser } from "../../actions/actions";
import { useEffect } from "react";

interface IProps {
	isLoggedIn: boolean;
	subscribeToAuthUserProps: any;
}

const Router: React.FC<IProps> = ({ isLoggedIn, subscribeToAuthUserProps }) => {
	useEffect(() => {
		subscribeToAuthUserProps();
	}, []);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				<Route exact path="/second-stage" component={SignupSecondStage} />
				{isLoggedIn && <Route exact path="/dashboard" component={Dashboard} />}
			</Switch>
		</BrowserRouter>
	);
};

const mapStateToProps = (state: any) => ({
	isLoggedIn: !!state.auth.firestoreID,
});

export default connect(mapStateToProps, { subscribeToAuthUserProps: subscribeToAuthUser })(Router);
