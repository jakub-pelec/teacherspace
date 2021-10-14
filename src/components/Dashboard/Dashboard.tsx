import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import styled from "styled-components";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Notes from "../Notes/Notes";

const Dashboard = () => {
	return (
		<Wrapper>
			<HashRouter>
				<NavigationBar />
				<ContentWrapper>
					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/profile">
							<Profile />
						</Route>
						<Route path="/notes">
							<Notes />
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
`;

const ContentWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 1em;
	padding-top: 5em;
`;

export default Dashboard;
