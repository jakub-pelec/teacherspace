import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import styled from "styled-components";

const Dashboard = () => {
	return (
		<Wrapper>
			<NavigationBar />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
`;

export default Dashboard;
