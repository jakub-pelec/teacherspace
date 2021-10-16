import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
}

const Home: React.FC<IProps> = ({ topLevelHistory }) => {
	return (
		<>
			<Helmet>
				<title>Teacherspace - Home</title>
			</Helmet>
			<div>
				<h1>Home</h1>
			</div>
		</>
	);
};

export default Home;
