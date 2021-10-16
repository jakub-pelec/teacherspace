import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Dashboard from "../Dashboard/Dashboard";
import SignupSecondStage from "../SignupSecondStage/SignupSecondStage";
import LandingPage from "../LandingPage/LandingPage";
import { subscribeToAuthUser } from "../../actions/actions";
import { useEffect } from "react";
import { AppState } from "../../typings/redux";

interface IProps {
	isLoggedIn: boolean;
	subscribeToAuthUserProps: any;
}

const Router: React.FC<IProps> = ({ isLoggedIn, subscribeToAuthUserProps }) => {
	useEffect(() => {
		subscribeToAuthUserProps();
	}, [subscribeToAuthUserProps]);
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				<Route exact path="/second-stage" component={SignupSecondStage} />
				<Route exact path="/dashboard" render={(props) => isLoggedIn ? <Dashboard {...props} /> : <Redirect to='/' />} />
			</Switch>
		</BrowserRouter>
	);
};

const mapStateToProps = (state: AppState) => ({
	isLoggedIn: !!state.auth.firestoreID,
});

export default connect(mapStateToProps, { subscribeToAuthUserProps: subscribeToAuthUser })(Router);
