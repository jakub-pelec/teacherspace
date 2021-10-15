import React from "react";
import { useHistory } from 'react-router-dom';

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
}

const Home: React.FC<IProps> = ({ topLevelHistory }) => {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
