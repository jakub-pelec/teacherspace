import React from "react";
import { RouteComponentProps } from "react-router";
import { Button } from "../../shared/components/Button/Button";
import { Helmet } from "react-helmet";

import { Wrapper } from "./Elements";

interface IProps extends RouteComponentProps {}

const LandingPage: React.FC<IProps> = ({ history: { push } }) => {
	return (
		<>
			<Helmet>
				<title>Teacherspace</title>
			</Helmet>
			<Wrapper>
				<Button onClick={() => push("/login")}>Login page</Button>
				<Button onClick={() => push("/register")}>Register page</Button>
			</Wrapper>
		</>
	);
};

export default LandingPage;
