import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { HashRouter, Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Notes from "../Notes/Notes";
import { Wrapper, ContentWrapper } from './Elements';

interface IProps extends RouteComponentProps {}

const Dashboard: React.FC<IProps> = ({ history }) => {
	return (
		<Wrapper>
			<HashRouter>
				<NavigationBar topLevelHistory={history} />
				<ContentWrapper>
					<Switch>
						<Route exact path="/">
							<Redirect to="/home" />3
						</Route>
						<Route path="/home">
							<Home topLevelHistory={history} />
						</Route>
						<Route path="/profile">
							<Profile topLevelHistory={history} />
						</Route>
						<Route path="/notes">
							<Notes topLevelHistory={history} />
						</Route>
					</Switch>
				</ContentWrapper>
			</HashRouter>
		</Wrapper>
	);
};



export default Dashboard;
