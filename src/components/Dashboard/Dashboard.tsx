import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import styled from "styled-components";
import { HashRouter, Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Notes from "../Notes/Notes";

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

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.bluredBg};
`;

const ContentWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 1em;
	padding-top: 5em;
`;

export default Dashboard;
